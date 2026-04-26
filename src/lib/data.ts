export interface Exercise {
  id: string;
  name: string;
  description: string;
  category: 'gym' | 'home' | 'no-equipment';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  muscleGroup: string;
  equipment: string;
  duration: number;
  calories: number;
  image: string;
  steps: string[];
  tips: string[];
}

export interface MealPlan {
  id: string;
  name: string;
  category: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  description: string;
  ingredients: string[];
  image?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  features: string[];
  popular?: boolean;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const exercises: Exercise[] = [
  {
    id: 'bench-press',
    name: 'Barbell Bench Press',
    description: 'The ultimate chest builder. Lie flat on a bench, unrack the barbell, lower it to your mid-chest, and press back up explosively. This compound movement targets your chest, shoulders, and triceps.',
    category: 'gym',
    difficulty: 'intermediate',
    muscleGroup: 'Chest',
    equipment: 'Barbell, Bench',
    duration: 10,
    calories: 85,
    image: '/images/workout-strength.png',
    steps: [
      'Lie flat on a bench with your feet firmly on the ground',
      'Grip the barbell slightly wider than shoulder-width apart',
      'Unrack the bar and hold it directly above your chest with arms extended',
      'Lower the bar slowly to your mid-chest, keeping elbows at 45 degrees',
      'Pause briefly at the bottom, then press the bar back up to the starting position',
      'Lock out your arms at the top without hyperextending your elbows',
      'Repeat for the desired number of repetitions'
    ],
    tips: [
      'Keep your shoulder blades retracted and depressed throughout the movement',
      'Maintain a slight arch in your lower back for better pressing mechanics',
      'Control the eccentric (lowering) phase for 2-3 seconds',
      'Breathe in on the way down, breathe out on the way up'
    ]
  },
  {
    id: 'bicep-curl',
    name: 'Dumbbell Bicep Curl',
    description: 'A classic isolation exercise that builds impressive biceps. Stand with dumbbells at your sides and curl them up while keeping your elbows pinned to your torso.',
    category: 'gym',
    difficulty: 'beginner',
    muscleGroup: 'Biceps',
    equipment: 'Dumbbells',
    duration: 8,
    calories: 45,
    image: '/images/exercise-bicep.png',
    steps: [
      'Stand with feet shoulder-width apart holding dumbbells at your sides',
      'Keep your elbows close to your torso and palms facing forward',
      'Curl the weight up by flexing at the elbow',
      'Squeeze your biceps at the top of the movement',
      'Slowly lower the dumbbells back to the starting position',
      'Repeat for the desired number of repetitions'
    ],
    tips: [
      'Avoid swinging your body to generate momentum',
      'Keep your wrists straight throughout the movement',
      'Focus on the mind-muscle connection with your biceps',
      'Try a slight forward lean to isolate the biceps more'
    ]
  },
  {
    id: 'barbell-squat',
    name: 'Barbell Back Squat',
    description: 'The king of leg exercises. Squats build massive lower body strength and power while engaging your core and back. Master this movement for overall athletic development.',
    category: 'gym',
    difficulty: 'intermediate',
    muscleGroup: 'Legs',
    equipment: 'Barbell, Squat Rack',
    duration: 12,
    calories: 120,
    image: '/images/exercise-squat.png',
    steps: [
      'Position the bar on your upper traps, gripping it just outside your shoulders',
      'Unrack the bar and step back with feet shoulder-width apart',
      'Brace your core and initiate the descent by pushing your hips back',
      'Lower until your thighs are parallel to the ground or slightly below',
      'Drive through your heels to stand back up explosively',
      'Lock out at the top by squeezing your glutes',
      'Repeat for the desired number of repetitions'
    ],
    tips: [
      'Keep your chest up and back neutral throughout the movement',
      'Push your knees out over your toes during the descent',
      'Take a deep breath and brace your core before each rep',
      'Start with bodyweight or light weights to perfect your form'
    ]
  },
  {
    id: 'push-ups',
    name: 'Push-Ups',
    description: 'The fundamental upper body exercise that requires no equipment. Push-ups build chest, shoulders, and triceps strength while engaging your core for stability.',
    category: 'no-equipment',
    difficulty: 'beginner',
    muscleGroup: 'Chest',
    equipment: 'None',
    duration: 5,
    calories: 35,
    image: '/images/workout-no-equip.png',
    steps: [
      'Start in a high plank position with hands shoulder-width apart',
      'Keep your body in a straight line from head to heels',
      'Lower your chest toward the ground by bending your elbows',
      'Keep elbows at a 45-degree angle from your body',
      'Push back up to the starting position by extending your arms',
      'Repeat for the desired number of repetitions'
    ],
    tips: [
      'Engage your core throughout the entire movement',
      'Don\'t let your hips sag or pike up',
      'If standard push-ups are too hard, start on your knees',
      'For more challenge, try decline or diamond push-ups'
    ]
  },
  {
    id: 'yoga-flow',
    name: 'Vinyasa Yoga Flow',
    description: 'A flowing sequence of yoga poses that improves flexibility, balance, and mindfulness. Perfect for recovery days or as a warm-up/cool-down routine.',
    category: 'home',
    difficulty: 'beginner',
    muscleGroup: 'Full Body',
    equipment: 'Yoga Mat',
    duration: 20,
    calories: 95,
    image: '/images/workout-home.png',
    steps: [
      'Start in Mountain Pose (Tadasana) - stand tall with feet together',
      'Inhale and sweep arms overhead into Upward Salute',
      'Exhale and fold forward into Standing Forward Bend',
      'Inhale to a halfway lift with flat back',
      'Exhale and step or jump back to Plank position',
      'Lower to Chaturanga, then push up into Upward Dog',
      'Push back into Downward Dog and hold for 5 breaths',
      'Walk feet to hands and slowly roll up to standing'
    ],
    tips: [
      'Move with your breath - each movement is paired with an inhale or exhale',
      'Don\'t force yourself into poses that feel painful',
      'Focus on alignment over depth in each posture',
      'Practice regularly for best results - even 10 minutes daily helps'
    ]
  },
  {
    id: 'deadlift',
    name: 'Conventional Deadlift',
    description: 'The most effective full-body strength exercise. Deadlifts target your posterior chain including hamstrings, glutes, and lower back while building incredible raw strength.',
    category: 'gym',
    difficulty: 'advanced',
    muscleGroup: 'Back',
    equipment: 'Barbell',
    duration: 10,
    calories: 110,
    image: '/images/workout-strength.png',
    steps: [
      'Stand with feet hip-width apart, barbell over mid-foot',
      'Hinge at hips and grip the bar just outside your knees',
      'Drop your hips and lift your chest, creating tension in your back',
      'Drive through your heels, pushing the floor away',
      'Keep the bar close to your body as you stand up',
      'Lock out by standing tall with hips extended',
      'Reverse the movement with control to lower the bar'
    ],
    tips: [
      'Your arms are just hooks - pull with your legs and back',
      'Keep your neutral spine throughout the entire lift',
      'Use mixed grip or straps if grip becomes a limiting factor',
      'Never round your lower back - this is the most important safety tip'
    ]
  },
  {
    id: 'plank',
    name: 'Plank Hold',
    description: 'The ultimate core exercise. A simple isometric hold that builds incredible core stability, shoulder strength, and mental toughness. No equipment needed.',
    category: 'no-equipment',
    difficulty: 'beginner',
    muscleGroup: 'Core',
    equipment: 'None',
    duration: 3,
    calories: 20,
    image: '/images/workout-no-equip.png',
    steps: [
      'Start in a forearm plank position with elbows under shoulders',
      'Extend legs behind you, balancing on toes',
      'Create a straight line from head to heels',
      'Engage your core by pulling your belly button toward your spine',
      'Squeeze your glutes and quads for stability',
      'Hold the position for the desired time'
    ],
    tips: [
      'Start with 20-30 seconds and gradually increase',
      'Don\'t let your hips drop or raise too high',
      'Breathe normally throughout the hold',
      'For variation, try side planks or shoulder taps'
    ]
  },
  {
    id: 'burpees',
    name: 'Burpees',
    description: 'The ultimate full-body conditioning exercise. Burpees combine a squat thrust, plank, push-up, and jump into one explosive movement that torches calories.',
    category: 'no-equipment',
    difficulty: 'advanced',
    muscleGroup: 'Full Body',
    equipment: 'None',
    duration: 5,
    calories: 65,
    image: '/images/workout-no-equip.png',
    steps: [
      'Stand with feet shoulder-width apart',
      'Drop into a squat position with hands on the ground',
      'Kick feet back into a plank position',
      'Perform a push-up (optional for more intensity)',
      'Jump feet back to hands into squat position',
      'Explosively jump up with arms overhead',
      'Land softly and immediately begin the next rep'
    ],
    tips: [
      'Pace yourself - burpees are taxing, focus on form over speed',
      'Land softly on the balls of your feet to protect your knees',
      'Modify by removing the push-up or jump if needed',
      'Great for HIIT workouts - try 30 seconds on, 15 seconds off'
    ]
  },
  {
    id: 'bodyweight-squat',
    name: 'Bodyweight Squat',
    description: 'The foundation of lower body training. Master this movement pattern before adding weight. Builds leg strength, mobility, and functional fitness.',
    category: 'home',
    difficulty: 'beginner',
    muscleGroup: 'Legs',
    equipment: 'None',
    duration: 8,
    calories: 50,
    image: '/images/workout-home.png',
    steps: [
      'Stand with feet shoulder-width apart or slightly wider',
      'Point toes slightly outward (15-30 degrees)',
      'Extend arms in front of you for counterbalance',
      'Push your hips back and bend knees to descend',
      'Lower until thighs are parallel to the ground',
      'Drive through your heels to return to standing',
      'Squeeze glutes at the top'
    ],
    tips: [
      'Keep your weight in your heels, not your toes',
      'Knees should track in the same direction as your toes',
      'Keep your chest up and back straight',
      'Use a chair behind you for depth reference and safety'
    ]
  },
  {
    id: 'pull-ups',
    name: 'Pull-Ups',
    description: 'The gold standard for upper body pulling strength. Pull-ups develop an impressive back, biceps, and grip strength. The ultimate test of relative strength.',
    category: 'gym',
    difficulty: 'advanced',
    muscleGroup: 'Back',
    equipment: 'Pull-Up Bar',
    duration: 8,
    calories: 75,
    image: '/images/workout-strength.png',
    steps: [
      'Grip the pull-up bar slightly wider than shoulder-width',
      'Hang with arms fully extended (dead hang position)',
      'Pull yourself up by driving elbows down and back',
      'Continue until your chin clears the bar',
      'Lower yourself with control back to dead hang',
      'Repeat for desired repetitions'
    ],
    tips: [
      'If you can\'t do a pull-up yet, start with assisted or negative pull-ups',
      'Avoid excessive kipping or swinging',
      'Focus on squeezing your back muscles at the top',
      'Vary your grip (overhand, underhand, neutral) to target different muscles'
    ]
  },
  {
    id: 'hiit-cardio',
    name: 'HIIT Cardio Blast',
    description: 'High-Intensity Interval Training that maximizes calorie burn in minimum time. Alternates between intense bursts of activity and fixed periods of rest.',
    category: 'home',
    difficulty: 'intermediate',
    muscleGroup: 'Full Body',
    equipment: 'None',
    duration: 15,
    calories: 150,
    image: '/images/workout-home.png',
    steps: [
      'Warm up with 2 minutes of light jogging in place',
      'Round 1: 30 seconds high knees + 15 seconds rest',
      'Round 2: 30 seconds mountain climbers + 15 seconds rest',
      'Round 3: 30 seconds jump squats + 15 seconds rest',
      'Round 4: 30 seconds burpees + 15 seconds rest',
      'Round 5: 30 seconds plank jacks + 15 seconds rest',
      'Cool down with 2 minutes of stretching'
    ],
    tips: [
      'Give maximum effort during work intervals - that\'s where the magic happens',
      'Keep rest periods strict for best results',
      'Stay hydrated throughout the session',
      'Start with 3-4 rounds if 5 is too challenging'
    ]
  },
  {
    id: 'shoulder-press',
    name: 'Dumbbell Shoulder Press',
    description: 'The premier exercise for building strong, capped shoulders. Targets all three deltoid heads and builds pressing strength that carries over to other upper body movements.',
    category: 'gym',
    difficulty: 'intermediate',
    muscleGroup: 'Shoulders',
    equipment: 'Dumbbells',
    duration: 8,
    calories: 55,
    image: '/images/workout-strength.png',
    steps: [
      'Sit on a bench with back support (or stand)',
      'Hold dumbbells at shoulder height with palms facing forward',
      'Press the dumbbells overhead until arms are fully extended',
      'Pause briefly at the top',
      'Lower the dumbbells back to shoulder height with control',
      'Repeat for desired repetitions'
    ],
    tips: [
      'Keep your core engaged to protect your lower back',
      'Don\'t lock out elbows aggressively at the top',
      'Avoid using momentum by not leaning back excessively',
      'Start with lighter weights to master the movement pattern'
    ]
  }
];

export const mealPlans: MealPlan[] = [
  {
    id: 'breakfast-1',
    name: 'Protein Power Bowl',
    category: 'breakfast',
    calories: 420,
    protein: 35,
    carbs: 45,
    fat: 12,
    description: 'A high-protein breakfast bowl with Greek yogurt, granola, berries, and a drizzle of honey. The perfect start to fuel your morning workout.',
    ingredients: ['200g Greek yogurt', '40g granola', '100g mixed berries', '1 tbsp honey', '15g chia seeds']
  },
  {
    id: 'breakfast-2',
    name: 'Avocado Toast with Eggs',
    category: 'breakfast',
    calories: 380,
    protein: 22,
    carbs: 30,
    fat: 20,
    description: 'Two slices of whole grain toast topped with smashed avocado and poached eggs. Rich in healthy fats and protein to keep you full.',
    ingredients: ['2 slices whole grain bread', '1 ripe avocado', '2 eggs', 'Salt, pepper, red pepper flakes']
  },
  {
    id: 'lunch-1',
    name: 'Grilled Chicken Quinoa Bowl',
    category: 'lunch',
    calories: 520,
    protein: 45,
    carbs: 50,
    fat: 14,
    description: 'A balanced lunch bowl with grilled chicken breast, fluffy quinoa, roasted vegetables, and a light lemon-tahini dressing.',
    ingredients: ['200g chicken breast', '150g quinoa', '100g roasted sweet potato', '80g broccoli', 'Lemon tahini dressing']
  },
  {
    id: 'lunch-2',
    name: 'Mediterranean Salad',
    category: 'lunch',
    calories: 380,
    protein: 28,
    carbs: 25,
    fat: 20,
    description: 'Fresh Mediterranean salad with grilled halloumi, mixed greens, olives, cherry tomatoes, and a red wine vinaigrette.',
    ingredients: ['150g halloumi', 'Mixed greens', '50g olives', '100g cherry tomatoes', 'Cucumber, red onion, vinaigrette']
  },
  {
    id: 'dinner-1',
    name: 'Salmon with Asparagus',
    category: 'dinner',
    calories: 480,
    protein: 40,
    carbs: 20,
    fat: 28,
    description: 'Pan-seared Atlantic salmon fillet served with roasted asparagus and a side of wild rice. Rich in omega-3 fatty acids.',
    ingredients: ['200g salmon fillet', '200g asparagus', '80g wild rice', 'Olive oil, lemon, garlic, dill']
  },
  {
    id: 'dinner-2',
    name: 'Lean Beef Stir-Fry',
    category: 'dinner',
    calories: 450,
    protein: 38,
    carbs: 35,
    fat: 16,
    description: 'Quick and flavorful lean beef stir-fry with mixed vegetables, brown rice, and a homemade teriyaki sauce.',
    ingredients: ['200g lean beef strips', '150g brown rice', 'Bell peppers, snap peas, carrots', 'Low-sodium soy sauce, ginger, garlic']
  },
  {
    id: 'snack-1',
    name: 'Protein Smoothie',
    category: 'snack',
    calories: 250,
    protein: 30,
    carbs: 28,
    fat: 5,
    description: 'A delicious protein smoothie with whey protein, banana, spinach, and almond milk. Perfect post-workout recovery drink.',
    ingredients: ['1 scoop whey protein', '1 banana', '50g spinach', '250ml almond milk', 'Ice cubes']
  },
  {
    id: 'snack-2',
    name: 'Trail Mix & Apple',
    category: 'snack',
    calories: 220,
    protein: 8,
    carbs: 25,
    fat: 12,
    description: 'A handful of mixed nuts and seeds with a crisp apple. Provides healthy fats, fiber, and natural energy.',
    ingredients: ['30g mixed nuts & seeds', '1 medium apple', 'Dash of cinnamon']
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Lost 15kg in 3 months',
    avatar: '/images/trainer.png',
    content: 'FitForge completely transformed my fitness journey. The AI Coach creates personalized plans that adapt to my progress, and the workout library is incredible. I\'ve never been more consistent!',
    rating: 5
  },
  {
    id: '2',
    name: 'Marcus Johnson',
    role: 'Marathon Runner',
    avatar: '/images/trainer.png',
    content: 'As an experienced runner, I was skeptical about an app helping me. But the AI Coach\'s training advice and the detailed exercise breakdowns helped me shave 12 minutes off my marathon time.',
    rating: 5
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    role: 'Fitness Beginner',
    avatar: '/images/trainer.png',
    content: 'I was completely new to fitness and felt intimidated by gyms. FitForge\'s home workouts and the supportive AI Coach gave me the confidence to start. Now I train 5 days a week!',
    rating: 5
  },
  {
    id: '4',
    name: 'David Park',
    role: 'Personal Trainer',
    avatar: '/images/trainer.png',
    content: 'I recommend FitForge to all my clients. The nutrition tracking, progress charts, and exercise demonstrations make it the perfect companion app for any fitness professional.',
    rating: 4
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    period: 'forever',
    features: [
      'Basic workout library access',
      '5 AI Coach messages per day',
      'Basic progress tracking',
      'Community access',
      'Standard exercise demos'
    ]
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 12.99,
    period: 'month',
    popular: true,
    features: [
      'Full workout library',
      'Unlimited AI Coach access',
      'Advanced progress analytics',
      'Custom meal plans',
      'HD video demonstrations',
      'Priority support',
      'Save favorite workouts'
    ]
  },
  {
    id: 'elite',
    name: 'Elite',
    price: 29.99,
    period: 'month',
    features: [
      'Everything in Pro',
      '1-on-1 video consultations',
      'Competition prep plans',
      'Body composition analysis',
      'Exclusive workout programs',
      'Early access to new features',
      'Personalized nutrition coaching'
    ]
  }
];

export const features: Feature[] = [
  {
    id: 'ai-coach',
    title: 'AI-Powered Coach',
    description: 'Get personalized workout plans and real-time advice from our intelligent AI coach that learns from your progress.',
    icon: 'bot'
  },
  {
    id: 'workouts',
    title: '500+ Exercises',
    description: 'Access a massive library of exercises with step-by-step instructions, video demos, and difficulty ratings.',
    icon: 'dumbbell'
  },
  {
    id: 'tracking',
    title: 'Smart Tracking',
    description: 'Monitor your progress with advanced charts, calorie tracking, and body composition metrics.',
    icon: 'chart'
  },
  {
    id: 'nutrition',
    title: 'Meal Planning',
    description: 'Get personalized meal plans with calorie tracking, macro breakdowns, and a food database.',
    icon: 'apple'
  },
  {
    id: 'community',
    title: 'Community',
    description: 'Join a supportive fitness community, share your achievements, and stay motivated together.',
    icon: 'users'
  },
  {
    id: 'anywhere',
    title: 'Train Anywhere',
    description: 'Gym, home, or outdoor - our workouts adapt to your environment and available equipment.',
    icon: 'map-pin'
  }
];

export const weeklySchedule = [
  { day: 'Mon', workout: 'Push Day', done: true, duration: 55, calories: 420 },
  { day: 'Tue', workout: 'Pull Day', done: true, duration: 50, calories: 380 },
  { day: 'Wed', workout: 'Rest / Yoga', done: true, duration: 20, calories: 95 },
  { day: 'Thu', workout: 'Leg Day', done: false, duration: 60, calories: 500 },
  { day: 'Fri', workout: 'Upper Body', done: false, duration: 55, calories: 430 },
  { day: 'Sat', workout: 'HIIT + Core', done: false, duration: 30, calories: 350 },
  { day: 'Sun', workout: 'Rest Day', done: false, duration: 0, calories: 0 },
];

export const progressData = [
  { week: 'W1', weight: 82, calories: 2450, workouts: 3 },
  { week: 'W2', weight: 81.5, calories: 2380, workouts: 4 },
  { week: 'W3', weight: 80.8, calories: 2420, workouts: 4 },
  { week: 'W4', weight: 80.2, calories: 2350, workouts: 5 },
  { week: 'W5', weight: 79.6, calories: 2400, workouts: 5 },
  { week: 'W6', weight: 79.1, calories: 2380, workouts: 5 },
  { week: 'W7', weight: 78.5, calories: 2320, workouts: 6 },
  { week: 'W8', weight: 78.0, calories: 2350, workouts: 6 },
];

export const dailyCalorieData = [
  { day: 'Mon', consumed: 2100, burned: 420, protein: 145, carbs: 220, fat: 65 },
  { day: 'Tue', consumed: 2350, burned: 380, protein: 160, carbs: 240, fat: 70 },
  { day: 'Wed', consumed: 1980, burned: 95, protein: 120, carbs: 210, fat: 58 },
  { day: 'Thu', consumed: 2200, burned: 500, protein: 155, carbs: 230, fat: 62 },
  { day: 'Fri', consumed: 2100, burned: 430, protein: 140, carbs: 215, fat: 60 },
  { day: 'Sat', consumed: 2400, burned: 350, protein: 130, carbs: 260, fat: 75 },
  { day: 'Sun', consumed: 1900, burned: 0, protein: 110, carbs: 200, fat: 55 },
];
