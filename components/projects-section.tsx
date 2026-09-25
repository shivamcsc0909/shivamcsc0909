'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, categories, Project } from '@/lib/projects';
import { Button } from './ui/button';
import { Input } from './ui/input';
import {
  ExternalLink,
  Search,
  Sparkles,
  Globe,
  Layers,
  ArrowUpRight,
  Smartphone,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Zap,
  TrendingUp,
  ShieldCheck,
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>('urban-power');

  // Top popular technology tags for quick filter
  const popularTechs = [
    'React Native',
    'Next.js',
    'Three.js',
    'WebSocket',
    'TypeScript',
    'PostgreSQL',
    'Docker',
    'FastAPI',
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'all' || project.category === selectedCategory;

      const matchesTech =
        !selectedTech ||
        project.technologies.some(
          (t) => t.toLowerCase() === selectedTech.toLowerCase()
        );

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        (project.subtitle && project.subtitle.toLowerCase().includes(q)) ||
        project.description.toLowerCase().includes(q) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(q)) ||
        (project.badge && project.badge.toLowerCase().includes(q));

      return matchesCategory && matchesTech && matchesSearch;
    });
  }, [selectedCategory, selectedTech, searchQuery]);

  const toggleExpand = (id: string) => {
    setExpandedProjectId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="relative w-full bg-muted/15 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] sm:w-[800px] h-[300px] sm:h-[400px] bg-primary/5 blur-[100px] sm:blur-[150px] pointer-events-none rounded-full" />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-14 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary mb-3 shadow-sm backdrop-blur-md">
            <Globe className="h-3.5 w-3.5" />
            28+ Production-Grade Systems & Live Work
          </div>
          <h2 className="text-balance text-2xl sm:text-4xl md:text-5xl font-extrabold text-foreground">
            Featured <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Projects</span> & Live Apps
          </h2>
          <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-balance text-xs sm:text-base text-muted-foreground leading-relaxed">
            From the <span className="font-semibold text-foreground">Urban Power Play Store App</span>, US digital agency <span className="font-semibold text-foreground">RankRiseUSA</span>, and <span className="font-semibold text-foreground">DigiQlik</span>, to sub-second <span className="font-semibold text-foreground">TechForex WebSocket trading</span> and WebGL 3D engines.
          </p>
        </motion.div>

        {/* Filter & Search Bar with Animated Badges */}
        <div className="mb-8 sm:mb-12 space-y-4 sm:space-y-6">
          {/* Search Box */}
          <div className="mx-auto max-w-lg relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects by tech, title, or keywords..."
              className="pl-11 pr-16 h-11 sm:h-12 bg-background/90 border-border/80 rounded-2xl focus:border-primary backdrop-blur-xl shadow-lg text-xs sm:text-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-medium text-muted-foreground hover:text-foreground bg-muted/60 px-2 py-1 rounded-md"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
            {categories.map((category) => {
              const isActive = selectedCategory === category.id;
              const count =
                category.id === 'all'
                  ? projects.length
                  : projects.filter((p) => p.category === category.id).length;

              return (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setSelectedTech(null);
                  }}
                  className={`relative flex items-center gap-1.5 rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25 font-semibold scale-105'
                      : 'bg-card/70 border border-border/70 text-muted-foreground hover:border-primary/40 hover:text-foreground hover:bg-card'
                  }`}
                >
                  <span>{category.label}</span>
                  <span
                    className={`rounded-full px-1.5 py-0.2 text-[9px] sm:text-[10px] font-bold ${
                      isActive
                        ? 'bg-primary-foreground/20 text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Popular Tech Quick Filters */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-1 text-xs">
            <span className="text-muted-foreground font-medium mr-1 flex items-center gap-1 text-[11px] sm:text-xs">
              <Zap className="h-3 w-3 text-accent" /> Filter:
            </span>
            {popularTechs.map((tech) => {
              const isSelected = selectedTech === tech;
              return (
                <button
                  key={tech}
                  onClick={() => setSelectedTech(isSelected ? null : tech)}
                  className={`rounded-lg px-2 sm:px-2.5 py-1 text-[10px] sm:text-[11px] transition-all ${
                    isSelected
                      ? 'bg-accent text-accent-foreground font-bold shadow-md shadow-accent/20'
                      : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground border border-border/50'
                  }`}
                >
                  {tech}
                </button>
              );
            })}
            {selectedTech && (
              <button
                onClick={() => setSelectedTech(null)}
                className="text-[10px] sm:text-[11px] text-red-400 underline hover:text-red-300 ml-1"
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-5 sm:gap-7 sm:grid-cols-2 lg:grid-cols-3 items-start"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const isExpanded = expandedProjectId === project.id;
              const isFlagship = project.flagship || project.featured;

              return (
                <motion.div
                  key={project.id}
                  layout
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.95 }}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border transition-all duration-300 hover:shadow-2xl ${
                    isFlagship
                      ? 'border-primary/40 bg-card/90 shadow-lg shadow-primary/5 hover:border-primary'
                      : 'border-border/80 bg-card/70 hover:border-border hover:bg-card/90'
                  } p-6 sm:p-7 backdrop-blur-xl`}
                >
                  {/* Glowing Edge Gradient for Flagships */}
                  {isFlagship && (
                    <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-primary/15 blur-2xl pointer-events-none group-hover:bg-primary/25 transition-all" />
                  )}

                  <div>
                    {/* Header Row: Status Badge & Metrics */}
                    <div className="flex items-center justify-between gap-2 mb-3.5">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {project.badge ? (
                          <span className="inline-flex items-center gap-1 rounded-full bg-primary/15 px-2.5 py-0.5 text-[11px] font-bold text-primary border border-primary/20">
                            <Sparkles className="h-3 w-3" />
                            {project.badge}
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 rounded-full bg-green-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-green-400 border border-green-500/20">
                            <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                            {project.status}
                          </span>
                        )}
                      </div>

                      {project.metrics && (
                        <span className="text-[10px] font-mono font-medium text-accent bg-accent/10 px-2 py-0.5 rounded-md text-right truncate max-w-[170px] border border-accent/20">
                          {project.metrics}
                        </span>
                      )}
                    </div>

                    {/* Project Title & Subtitle */}
                    <h3 className="text-xl font-extrabold text-foreground group-hover:text-primary transition-colors leading-snug">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="text-xs font-semibold text-primary/90 mt-1 mb-3">
                        {project.subtitle}
                      </p>
                    )}

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Expandable Key Highlights / Architecture */}
                    {project.highlights && project.highlights.length > 0 && (
                      <div className="mb-4">
                        <button
                          type="button"
                          onClick={() => toggleExpand(project.id)}
                          className="flex items-center justify-between w-full rounded-xl bg-muted/40 px-3 py-2 text-xs font-semibold text-foreground hover:bg-muted transition-colors border border-border/50"
                        >
                          <span className="flex items-center gap-1.5 text-primary">
                            <ShieldCheck className="h-3.5 w-3.5" />
                            {isExpanded ? 'Hide Architecture Highlights' : 'View Architecture Highlights'}
                          </span>
                          {isExpanded ? (
                            <ChevronUp className="h-3.5 w-3.5 text-muted-foreground" />
                          ) : (
                            <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
                          )}
                        </button>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.ul
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.25 }}
                              className="mt-2 space-y-1.5 rounded-xl border border-border/60 bg-muted/20 p-3 text-[11px] text-muted-foreground"
                            >
                              {project.highlights.map((point, hIdx) => (
                                <li key={hIdx} className="flex items-start gap-2">
                                  <CheckCircle2 className="h-3.5 w-3.5 text-green-400 flex-shrink-0 mt-0.5" />
                                  <span className="leading-snug text-foreground/90">{point}</span>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </div>

                  {/* Bottom Section: Tech Stack & Action Links */}
                  <div className="space-y-4 pt-4 border-t border-border/70 mt-2">
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-block rounded-md border border-border/70 bg-background/80 px-2 py-0.5 text-[10px] font-medium text-muted-foreground group-hover:border-primary/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-2 pt-1">
                      {/* Play Store Download Button for Mobile Apps */}
                      {project.playStoreUrl && (
                        <Button
                          size="sm"
                          asChild
                          className="w-full sm:flex-1 gap-1.5 bg-green-600 hover:bg-green-500 text-white font-semibold text-xs shadow-md shadow-green-600/20"
                        >
                          <a
                            href={project.playStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Smartphone className="h-3.5 w-3.5" />
                            <span>Play Store App</span>
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </a>
                        </Button>
                      )}

                      {/* Live Website Demo Link */}
                      <Button
                        size="sm"
                        variant={project.playStoreUrl ? 'outline' : 'default'}
                        asChild
                        className={`w-full ${project.playStoreUrl ? 'sm:flex-1' : ''} gap-1.5 font-semibold text-xs transition-all`}
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span>Visit Live Platform</span>
                          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-16 text-center space-y-4 rounded-3xl border border-border bg-card/50 p-8"
          >
            <p className="text-xl font-bold text-foreground">
              No matching projects found
            </p>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              We couldn&apos;t find any project matching &quot;{searchQuery}&quot;. Try resetting your filters to explore all 28+ projects.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSelectedCategory('all');
                setSelectedTech(null);
                setSearchQuery('');
              }}
              className="mt-2"
            >
              Reset All Filters
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
