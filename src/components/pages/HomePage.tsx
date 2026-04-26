'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAppStore } from '@/lib/store';
import { features, testimonials, pricingPlans } from '@/lib/data';
import {
  Bot, Dumbbell, BarChart3, Apple, Users, MapPin,
  ArrowRight, Star, Check, Zap, Shield,
  Flame, Target, TrendingUp,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  bot: <Bot className="h-6 w-6" />,
  dumbbell: <Dumbbell className="h-6 w-6" />,
  chart: <BarChart3 className="h-6 w-6" />,
  apple: <Apple className="h-6 w-6" />,
  users: <Users className="h-6 w-6" />,
  'map-pin': <MapPin className="h-6 w-6" />,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
};

export function HomePage() {
  const { navigate } = useAppStore();

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/hero-bg.png')" }}
          />
          <div className="hero-overlay absolute inset-0" />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-primary/40"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm bg-primary/10 border-primary/20 text-primary">
              <Zap className="h-3 w-3 mr-1.5" />
              AI-Powered Fitness
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-6">
              Transform Your
              <br />
              <span className="gradient-text">Body & Mind</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Get personalized workout plans, real-time AI coaching, nutrition guidance,
              and smart progress tracking — all in one platform.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                onClick={() => navigate('workouts')}
                className="h-14 px-8 text-base rounded-xl neon-glow gap-2 font-semibold"
              >
                Start Training
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate('ai-coach')}
                className="h-14 px-8 text-base rounded-xl gap-2 font-semibold glass border-white/20 text-foreground hover:bg-white/10"
              >
                <Bot className="h-4 w-4" />
                Try AI Coach
              </Button>
            </div>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-8 mt-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {[
                { value: '500+', label: 'Exercises' },
                { value: '50K+', label: 'Active Users' },
                { value: '4.9', label: 'App Rating' },
                { value: '24/7', label: 'AI Support' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 rounded-full bg-primary/60" />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <Badge variant="secondary" className="mb-4">Features</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Everything You Need to <span className="gradient-text">Succeed</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A complete fitness ecosystem designed to support your journey from day one.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full border-border/50">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      {iconMap[feature.icon]}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why FitForge */}
      <section className="py-20 sm:py-28 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Badge variant="secondary" className="mb-4">Why FitForge</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Not Just Another <span className="gradient-text">Fitness App</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                FitForge combines cutting-edge AI with proven fitness methodologies to create
                a truly personalized experience. Our AI Coach learns from your progress and
                adapts your plans in real-time.
              </p>
              <div className="space-y-4">
                {[
                  { icon: <Target className="h-5 w-5 text-primary" />, title: 'Personalized Plans', desc: 'AI creates custom workouts based on your goals and fitness level' },
                  { icon: <TrendingUp className="h-5 w-5 text-primary" />, title: 'Adaptive Training', desc: 'Plans evolve as you progress, ensuring continuous improvement' },
                  { icon: <Flame className="h-5 w-5 text-primary" />, title: 'Motivation System', desc: 'Daily challenges, streaks, and AI-powered encouragement' },
                  { icon: <Shield className="h-5 w-5 text-primary" />, title: 'Expert Guidance', desc: 'Built by certified trainers and sports scientists' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 items-start">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden neon-glow">
                <div
                  className="aspect-[4/3] bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/workout-strength.png')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <Card className="glass">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">Today&apos;s Workout</p>
                          <p className="text-xs text-muted-foreground">Upper Body Strength</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-bold text-primary">85%</p>
                          <p className="text-xs text-muted-foreground">Complete</p>
                        </div>
                      </div>
                      <div className="mt-3 h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-primary rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: '85%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <Badge variant="secondary" className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Loved by <span className="gradient-text">Thousands</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-border/50">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          className={`h-4 w-4 ${j < t.rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted'}`}
                        />
                      ))}
                    </div>
                    <p className="text-sm leading-relaxed mb-6 text-muted-foreground">
                      &ldquo;{t.content}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div
                        className="h-10 w-10 rounded-full bg-cover bg-center"
                        style={{ backgroundImage: `url('${t.avatar}')` }}
                      />
                      <div>
                        <p className="font-semibold text-sm">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 sm:py-28 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <Badge variant="secondary" className="mb-4">Pricing</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Simple, <span className="gradient-text">Transparent</span> Pricing
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Start free and upgrade when you&apos;re ready. No hidden fees.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={plan.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i + 1}
              >
                <Card className={`relative h-full transition-all duration-300 hover:shadow-lg ${
                  plan.popular ? 'border-primary shadow-lg neon-glow scale-105' : 'border-border/50'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground px-3 py-1">Most Popular</Badge>
                    </div>
                  )}
                  <CardContent className="p-6 flex flex-col">
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                    <div className="mt-4 mb-6">
                      <span className="text-4xl font-black">
                        ${plan.price === 0 ? '0' : plan.price.toFixed(2)}
                      </span>
                      <span className="text-muted-foreground ml-2 text-sm">/{plan.period}</span>
                    </div>
                    <ul className="space-y-3 mb-8 flex-1">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full rounded-xl ${
                        plan.popular
                          ? 'neon-glow'
                          : ''
                      }`}
                      variant={plan.popular ? 'default' : 'outline'}
                      size="lg"
                    >
                      {plan.price === 0 ? 'Get Started Free' : 'Subscribe Now'}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="relative rounded-3xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/hero-bg.png')" }}
            />
            <div className="hero-overlay absolute inset-0" />
            <div className="relative z-10 text-center py-16 sm:py-24 px-4">
              <h2 className="text-3xl sm:text-5xl font-black mb-4">
                Ready to <span className="gradient-text">Start?</span>
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto mb-8 text-lg">
                Join 50,000+ people already transforming their lives with FitForge.
              </p>
              <Button
                size="lg"
                onClick={() => navigate('workouts')}
                className="h-14 px-10 text-base rounded-xl neon-glow gap-2 font-semibold"
              >
                <Dumbbell className="h-4 w-4" />
                Start Your Journey
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
