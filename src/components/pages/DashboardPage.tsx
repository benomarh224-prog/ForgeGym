'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useAppStore } from '@/lib/store';
import { progressData, dailyCalorieData, weeklySchedule } from '@/lib/data';
import {
  User, Target, Flame, TrendingDown, Calendar,
  Dumbbell, Trophy, Edit3, Save, X,
  Weight, Ruler, Activity, Apple,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, BarChart, Bar,
  PieChart, Pie, Cell,
} from 'recharts';

const goalLabels: Record<string, string> = {
  lose_weight: 'Lose Weight',
  gain_muscle: 'Build Muscle',
  stay_fit: 'Stay Fit',
  increase_endurance: 'Endurance',
};

const levelLabels: Record<string, string> = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
};

export function DashboardPage() {
  const store = useAppStore();
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    weight: store.userWeight,
    height: store.userHeight,
    goal: store.userGoal,
    level: store.userLevel,
    weeklyGoal: store.weeklyGoal,
  });

  const totalCaloriesBurned = dailyCalorieData.reduce((sum, d) => sum + d.burned, 0);
  const totalWorkouts = weeklySchedule.filter((d) => d.done).length;
  const avgCalories = Math.round(dailyCalorieData.reduce((sum, d) => sum + d.consumed, 0) / 7);
  const bmi = store.userHeight > 0 ? (store.userWeight / (store.userHeight / 100) ** 2).toFixed(1) : '—';
  const currentStreak = 12;
  const weeklyProgress = (totalWorkouts / store.weeklyGoal) * 100;

  const macroData = [
    { name: 'Protein', value: dailyCalorieData.reduce((s, d) => s + d.protein, 0) / 7, fill: 'oklch(0.72 0.19 155)' },
    { name: 'Carbs', value: dailyCalorieData.reduce((s, d) => s + d.carbs, 0) / 7, fill: 'oklch(0.75 0.12 60)' },
    { name: 'Fat', value: dailyCalorieData.reduce((s, d) => s + d.fat, 0) / 7, fill: 'oklch(0.60 0.15 250)' },
  ];

  const handleSave = () => {
    store.setUserProfile(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({
      weight: store.userWeight,
      height: store.userHeight,
      goal: store.userGoal,
      level: store.userLevel,
      weeklyGoal: store.weeklyGoal,
    });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-8 flex items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Your <span className="gradient-text">Dashboard</span>
            </h1>
            <p className="text-muted-foreground mt-1">Track your fitness journey</p>
          </div>
          <Button
            variant={isEditing ? 'default' : 'outline'}
            onClick={isEditing ? handleSave : () => setIsEditing(true)}
            className="rounded-xl gap-2"
          >
            {isEditing ? <><Save className="h-4 w-4" /> Save</> : <><Edit3 className="h-4 w-4" /> Edit Profile</>}
          </Button>
        </motion.div>

        {/* Stats Cards Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { icon: <Flame className="h-5 w-5" />, label: 'Calories Burned', value: totalCaloriesBurned.toLocaleString(), sub: 'This week', color: 'text-orange-500', bg: 'bg-orange-500/10' },
            { icon: <Dumbbell className="h-5 w-5" />, label: 'Workouts', value: `${totalWorkouts}/${store.weeklyGoal}`, sub: 'Weekly goal', color: 'text-primary', bg: 'bg-primary/10' },
            { icon: <Trophy className="h-5 w-5" />, label: 'Streak', value: `${currentStreak}d`, sub: 'Keep going!', color: 'text-amber-500', bg: 'bg-amber-500/10' },
            { icon: <TrendingDown className="h-5 w-5" />, label: 'Weight', value: `${store.userWeight}kg`, sub: `BMI: ${bmi}`, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Card className="border-border/50">
                <CardContent className="p-4">
                  <div className={cn('h-10 w-10 rounded-xl flex items-center justify-center mb-3', stat.bg, stat.color)}>
                    {stat.icon}
                  </div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                  <p className="text-xs text-muted-foreground/70">{stat.sub}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Charts */}
          <div className="lg:col-span-2 space-y-6">
            {/* Weight Progress Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="border-border/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <TrendingDown className="h-4 w-4 text-primary" />
                    Weight Progress
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={progressData}>
                        <defs>
                          <linearGradient id="weightGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="oklch(0.72 0.19 155)" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="oklch(0.72 0.19 155)" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.5 0 0 / 10%)" />
                        <XAxis dataKey="week" tick={{ fontSize: 12 }} stroke="oklch(0.5 0 0 / 30%)" />
                        <YAxis domain={['auto', 'auto']} tick={{ fontSize: 12 }} stroke="oklch(0.5 0 0 / 30%)" />
                        <Tooltip
                          contentStyle={{
                            background: 'oklch(0.17 0.005 110)',
                            border: '1px solid oklch(1 0 0 / 10%)',
                            borderRadius: '12px',
                            fontSize: 12,
                          }}
                        />
                        <Area type="monotone" dataKey="weight" stroke="oklch(0.72 0.19 155)" fill="url(#weightGrad)" strokeWidth={2} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Weekly Calories Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="border-border/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Flame className="h-4 w-4 text-orange-500" />
                    Daily Calories
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={dailyCalorieData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.5 0 0 / 10%)" />
                        <XAxis dataKey="day" tick={{ fontSize: 12 }} stroke="oklch(0.5 0 0 / 30%)" />
                        <YAxis tick={{ fontSize: 12 }} stroke="oklch(0.5 0 0 / 30%)" />
                        <Tooltip
                          contentStyle={{
                            background: 'oklch(0.17 0.005 110)',
                            border: '1px solid oklch(1 0 0 / 10%)',
                            borderRadius: '12px',
                            fontSize: 12,
                          }}
                        />
                        <Bar dataKey="consumed" fill="oklch(0.72 0.19 155)" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="burned" fill="oklch(0.75 0.12 60)" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <Card className="border-border/50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <User className="h-4 w-4 text-primary" />
                    Profile
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {isEditing ? (
                    <>
                      <div className="space-y-2">
                        <Label className="text-xs">Weight (kg)</Label>
                        <Input
                          type="number"
                          value={editData.weight}
                          onChange={(e) => setEditData({ ...editData, weight: Number(e.target.value) })}
                          className="h-9 rounded-lg"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-xs">Height (cm)</Label>
                        <Input
                          type="number"
                          value={editData.height}
                          onChange={(e) => setEditData({ ...editData, height: Number(e.target.value) })}
                          className="h-9 rounded-lg"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-xs">Goal</Label>
                        <Select value={editData.goal} onValueChange={(v) => setEditData({ ...editData, goal: v })}>
                          <SelectTrigger className="h-9 rounded-lg"><SelectValue /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="lose_weight">Lose Weight</SelectItem>
                            <SelectItem value="gain_muscle">Build Muscle</SelectItem>
                            <SelectItem value="stay_fit">Stay Fit</SelectItem>
                            <SelectItem value="increase_endurance">Endurance</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-xs">Level</Label>
                        <Select value={editData.level} onValueChange={(v) => setEditData({ ...editData, level: v })}>
                          <SelectTrigger className="h-9 rounded-lg"><SelectValue /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="beginner">Beginner</SelectItem>
                            <SelectItem value="intermediate">Intermediate</SelectItem>
                            <SelectItem value="advanced">Advanced</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-xs">Weekly Goal (workouts)</Label>
                        <Input
                          type="number"
                          min={1}
                          max={7}
                          value={editData.weeklyGoal}
                          onChange={(e) => setEditData({ ...editData, weeklyGoal: Number(e.target.value) })}
                          className="h-9 rounded-lg"
                        />
                      </div>
                      <Button variant="ghost" size="sm" onClick={handleCancel} className="w-full gap-1">
                        <X className="h-3 w-3" /> Cancel
                      </Button>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-4">
                        <div
                          className="h-14 w-14 rounded-full bg-cover bg-center ring-2 ring-primary/20"
                          style={{ backgroundImage: "url('/images/trainer.png')" }}
                        />
                        <div>
                          <p className="font-semibold">Fitness Enthusiast</p>
                          <Badge variant="secondary" className="mt-1">{levelLabels[store.userLevel]}</Badge>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 rounded-xl bg-muted/50 text-center">
                          <Weight className="h-4 w-4 mx-auto mb-1 text-primary" />
                          <p className="text-sm font-semibold">{store.userWeight}kg</p>
                          <p className="text-xs text-muted-foreground">Weight</p>
                        </div>
                        <div className="p-3 rounded-xl bg-muted/50 text-center">
                          <Ruler className="h-4 w-4 mx-auto mb-1 text-primary" />
                          <p className="text-sm font-semibold">{store.userHeight}cm</p>
                          <p className="text-xs text-muted-foreground">Height</p>
                        </div>
                        <div className="p-3 rounded-xl bg-muted/50 text-center">
                          <Target className="h-4 w-4 mx-auto mb-1 text-primary" />
                          <p className="text-sm font-semibold">{goalLabels[store.userGoal]}</p>
                          <p className="text-xs text-muted-foreground">Goal</p>
                        </div>
                        <div className="p-3 rounded-xl bg-muted/50 text-center">
                          <Activity className="h-4 w-4 mx-auto mb-1 text-primary" />
                          <p className="text-sm font-semibold">{store.weeklyGoal}/wk</p>
                          <p className="text-xs text-muted-foreground">Target</p>
                        </div>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Weekly Progress */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <Card className="border-border/50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    Weekly Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span>Workout Goal</span>
                      <span className="font-semibold text-primary">{totalWorkouts}/{store.weeklyGoal}</span>
                    </div>
                    <Progress value={Math.min(weeklyProgress, 100)} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    {weeklySchedule.map((day) => (
                      <div key={day.day} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <div className={cn(
                            'h-7 w-7 rounded-lg flex items-center justify-center text-xs font-medium',
                            day.done ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                          )}>
                            {day.done ? '✓' : day.day}
                          </div>
                          <span className={cn(day.done && 'line-through text-muted-foreground')}>{day.workout}</span>
                        </div>
                        {day.duration > 0 && (
                          <span className="text-xs text-muted-foreground">{day.duration}m</span>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Macro Breakdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="border-border/50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Apple className="h-4 w-4 text-primary" />
                    Avg. Daily Macros
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={macroData}
                          cx="50%"
                          cy="50%"
                          innerRadius={50}
                          outerRadius={70}
                          dataKey="value"
                          strokeWidth={0}
                        >
                          {macroData.map((entry, i) => (
                            <Cell key={i} fill={entry.fill} />
                          ))}
                        </Pie>
                        <Tooltip
                          contentStyle={{
                            background: 'oklch(0.17 0.005 110)',
                            border: '1px solid oklch(1 0 0 / 10%)',
                            borderRadius: '12px',
                            fontSize: 12,
                          }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex justify-center gap-4 mt-2">
                    {macroData.map((m) => (
                      <div key={m.name} className="flex items-center gap-1.5 text-xs">
                        <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: m.fill }} />
                        <span className="text-muted-foreground">{m.name}: <span className="font-medium text-foreground">{Math.round(m.value)}g</span></span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

