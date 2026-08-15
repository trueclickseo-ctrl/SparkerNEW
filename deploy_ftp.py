import os
import sys
import ftplib
import time

FTP_HOST = "195.35.39.151"
FTP_USER = "u104700239.sparkersgames.com"
FTP_PASS = r"@W2wCQ;>]/vUcw/f"
LOCAL_BUILD_DIR = r"d:\Project-Sparker-ChatGPT\out"

def connect_ftp():
    for attempt in range(5):
        try:
            ftp = ftplib.FTP()
            ftp.connect(FTP_HOST, 21, timeout=60)
            ftp.login(FTP_USER, FTP_PASS)
            ftp.set_pasv(True)
            ftp.cwd("/public_html")
            return ftp
        except Exception as e:
            print(f"Connection attempt {attempt+1} failed: {e}. Retrying in 3s...")
            time.sleep(3)
    raise Exception("Could not connect to FTP server after 5 attempts.")

def ensure_remote_dir(ftp, remote_path):
    if not remote_path or remote_path == ".":
        ftp.cwd("/public_html")
        return
    parts = [p for p in remote_path.split("/") if p]
    current = "/public_html"
    ftp.cwd(current)
    for part in parts:
        try:
            ftp.cwd(part)
        except ftplib.error_perm:
            try:
                ftp.mkd(part)
                ftp.cwd(part)
            except Exception as e:
                pass

def upload_file_with_retry(get_ftp_func, local_file_path, rel_path, current_ftp):
    remote_dir = os.path.dirname(rel_path).replace("\\", "/")
    remote_filename = os.path.basename(rel_path)

    ftp = current_ftp
    max_tries = 5
    for attempt in range(max_tries):
        try:
            ensure_remote_dir(ftp, remote_dir)
            with open(local_file_path, "rb") as f:
                ftp.storbinary(f"STOR {remote_filename}", f)
            return ftp
        except Exception as e:
            print(f"   [Retry {attempt+1}/{max_tries}] Error uploading {rel_path}: {e}")
            time.sleep(3)
            try:
                ftp.quit()
            except Exception:
                pass
            ftp = get_ftp_func()
    print(f"❌ Failed to upload {rel_path} after {max_tries} attempts.")
    return ftp

def deploy():
    if not os.path.exists(LOCAL_BUILD_DIR):
        print(f"Error: {LOCAL_BUILD_DIR} does not exist.")
        return

    print("Gathering files to upload...")
    files_to_upload = []
    for root, dirs, files in os.walk(LOCAL_BUILD_DIR):
        for file in files:
            local_path = os.path.join(root, file)
            rel_path = os.path.relpath(local_path, LOCAL_BUILD_DIR).replace("\\", "/")
            files_to_upload.append((local_path, rel_path))

    total = len(files_to_upload)
    print(f"Total files to deploy: {total}")

    ftp = connect_ftp()
    uploaded = 0
    start_time = time.time()

    for local_path, rel_path in files_to_upload:
        uploaded += 1
        if uploaded % 25 == 0 or uploaded == total:
            print(f"[{uploaded}/{total}] Uploading {rel_path}...")
        ftp = upload_file_with_retry(connect_ftp, local_path, rel_path, ftp)

    elapsed = time.time() - start_time
    print(f"🎉 Deployment completed successfully! Uploaded {total} files in {elapsed:.1f}s.")
    try:
        ftp.quit()
    except Exception:
        pass

if __name__ == "__main__":
    deploy()
