import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Gamepad2, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-4 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 rounded-3xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center mx-auto text-2xl font-extrabold font-heading shadow-inner">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-heading font-extrabold text-slate-900 dark:text-white">
            Page Not Found
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            The game deck or page you were looking for could not be located or has been moved.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Link href="/en">
            <Button variant="default" size="md">
              <Home className="w-4 h-4" /> Go to Homepage
            </Button>
          </Link>
          <Link href="/en/play">
            <Button variant="play" size="md">
              <Gamepad2 className="w-4 h-4" /> Explore Games
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
