'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert } from '@/components/ui/alert';
import { Modal } from '@/components/ui/modal';
import { Tabs } from '@/components/ui/tabs';
import { Accordion } from '@/components/ui/accordion';
import { Skeleton } from '@/components/ui/skeleton';
import { Toast } from '@/components/ui/toast';
import { ThemeToggle } from '@/components/theme-toggle';
import { Gamepad2, Heart, Sparkles } from 'lucide-react';

export default function DesignSystemPage() {
  const [activeTab, setActiveTab] = React.useState('sparkers');
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [showToast, setShowToast] = React.useState(false);

  const accordionItems = [
    {
      id: 'rule-1',
      title: 'How do you play Sparkers Card Decks?',
      content: 'Players take turns drawing digital cards from selected category decks. Read the prompt out loud and let everyone answer freely.',
    },
    {
      id: 'rule-2',
      title: 'Can couples play in remote or long-distance mode?',
      content: 'Yes! Screen-share the card deck or sync session room numbers to flip cards in real-time.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="max-w-6xl mx-auto flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <h1 className="font-heading text-3xl font-extrabold tracking-tight">
            Sparkers Games — Design System
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Milestone 2 UI Library: Shared Sparkers Branding, Play Theme & Couples Theme
          </p>
        </div>
        <ThemeToggle />
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        <section className="space-y-4">
          <h2 className="text-xl font-bold font-heading">Theme Switcher</h2>
          <Tabs
            tabs={[
              { id: 'sparkers', label: 'Shared Sparkers Theme', badge: 'Default' },
              { id: 'play', label: 'Play Theme (/play)', badge: 'Party' },
              { id: 'couples', label: 'Couples Theme (/couples)', badge: 'Intimacy' },
            ]}
            activeTab={activeTab}
            onChange={setActiveTab}
            variant={activeTab === 'play' ? 'play' : activeTab === 'couples' ? 'couples' : 'default'}
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold font-heading">Buttons</h2>
          <div className="flex flex-wrap gap-4 items-center p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
            <Button variant="default"><Sparkles className="w-4 h-4" /> Sparkers Default</Button>
            <Button variant="play"><Gamepad2 className="w-4 h-4" /> Play Theme</Button>
            <Button variant="couples"><Heart className="w-4 h-4" /> Couples Theme</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold font-heading">Badges</h2>
          <div className="flex flex-wrap gap-3 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
            <Badge variant="default">Sparkers Emerald</Badge>
            <Badge variant="play">Party &amp; Teens</Badge>
            <Badge variant="couples">Couples &amp; Romantic</Badge>
            <Badge variant="amber">Trending</Badge>
            <Badge variant="outline">Outline Badge</Badge>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold font-heading">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="default">
              <CardHeader>
                <Badge variant="default" className="w-max">Shared Brand</Badge>
                <CardTitle className="mt-2">Truth or Dare</CardTitle>
                <CardDescription>Classic party card deck for all ages.</CardDescription>
              </CardHeader>
              <CardContent><p className="text-sm text-slate-600 dark:text-slate-400">Over 500+ dares and truths.</p></CardContent>
              <CardFooter><Button size="sm" variant="default" className="w-full">Play Deck</Button></CardFooter>
            </Card>
            <Card variant="play">
              <CardHeader>
                <Badge variant="play" className="w-max">Play Theme</Badge>
                <CardTitle className="mt-2">Never Have I Ever</CardTitle>
                <CardDescription>Dynamic party mode for groups.</CardDescription>
              </CardHeader>
              <CardContent><p className="text-sm text-slate-600 dark:text-slate-400">Interactive voting with randomizer.</p></CardContent>
              <CardFooter><Button size="sm" variant="play" className="w-full">Launch Game</Button></CardFooter>
            </Card>
            <Card variant="couples">
              <CardHeader>
                <Badge variant="couples" className="w-max">Couples Theme</Badge>
                <CardTitle className="mt-2">Deep Intimacy Deck</CardTitle>
                <CardDescription>Romantic &amp; flirty prompts.</CardDescription>
              </CardHeader>
              <CardContent><p className="text-sm text-slate-600 dark:text-slate-400">89 Framework questions.</p></CardContent>
              <CardFooter><Button size="sm" variant="couples" className="w-full">Open Deck</Button></CardFooter>
            </Card>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold font-heading">Alert Banners</h2>
          <div className="space-y-3">
            <Alert variant="info" title="AEO & GEO Ready">Direct answer snippets integrated across all routes.</Alert>
            <Alert variant="couples" title="Intimacy Ground Rules">Always establish safe words before playing deep prompts.</Alert>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-xl font-bold font-heading">Accordions</h2>
            <Accordion items={accordionItems} defaultOpenId="rule-1" />
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold font-heading">Loading Skeletons</h2>
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-4">
              <Skeleton className="h-6 w-1/3" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
              <Skeleton className="h-10 w-full" />
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold font-heading">Interactive Triggers</h2>
          <div className="flex gap-4">
            <Button variant="outline" onClick={() => setIsModalOpen(true)}>Open Modal</Button>
            <Button variant="outline" onClick={() => setShowToast(true)}>Show Toast</Button>
          </div>
        </section>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Interactive Deck Options" description="Configure your session filters.">
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">This modal is fully accessible and responds to Escape key presses.</p>
        <Button variant="default" className="w-full" onClick={() => setIsModalOpen(false)}>Save Configuration</Button>
      </Modal>

      <Toast message="Game deck added to favorites!" isVisible={showToast} onClose={() => setShowToast(false)} />
    </div>
  );
}
