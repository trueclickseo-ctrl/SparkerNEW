import os
import sys
import ftplib

FTP_HOST = "195.35.39.151"
FTP_USER = "u104700239.sparkersgames.com"
FTP_PASS = r"@W2wCQ;>]/vUcw/f"
REMOTE_TARGET_DIR = "public_html"
LOCAL_BUILD_DIR = r"d:\Project-Sparker-ChatGPT\out"

def test_connection():
    print(f"Connecting to FTP {FTP_HOST}:21 as {FTP_USER}...")
    try:
        ftp = ftplib.FTP(FTP_HOST)
        ftp.login(FTP_USER, FTP_PASS)
        print("Connected successfully!")
        print("Remote pwd:", ftp.pwd())
        print("Remote dir list:", ftp.nlst())
        ftp.quit()
        return True
    except Exception as e:
        print("FTP Connection Error:", e)
        return False

if __name__ == "__main__":
    test_connection()
