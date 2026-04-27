import { NextResponse } from 'next/server';
import ZAI from 'z-ai-web-dev-sdk';

let zaiInstance: Awaited<ReturnType<typeof ZAI.create>> | null = null;

async function getZAI() {
  if (!zaiInstance) {
    zaiInstance = await ZAI.create();
  }
  return zaiInstance;
}

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    if (!messages || messages.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Messages are required' },
        { status: 400 }
      );
    }

    // Mock AI responses for development
    const lastMessage = messages[messages.length - 1];
    let mockResponse = '';

    if (lastMessage.content.toLowerCase().includes('workout') || lastMessage.content.toLowerCase().includes('exercise')) {
      mockResponse = "Great question about workouts! Based on your beginner level, I'd recommend starting with compound exercises like squats, push-ups, and rows. Try this simple routine:\n\n**Beginner Full-Body Workout:**\n• Squats: 3 sets of 10-12 reps\n• Push-ups (knee or wall variation): 3 sets of 8-10 reps\n• Bent-over rows (with dumbbells or resistance band): 3 sets of 10 reps\n• Plank: 3 sets of 20-30 seconds\n\nRest 60-90 seconds between sets. Do this 3x per week with rest days in between. Focus on proper form! 💪";
    } else if (lastMessage.content.toLowerCase().includes('diet') || lastMessage.content.toLowerCase().includes('nutrition') || lastMessage.content.toLowerCase().includes('eat')) {
      mockResponse = "Nutrition is key to your fitness success! For your weight goal, aim for a balanced approach:\n\n**Daily Calorie Estimate:** ~2,200-2,500 calories\n**Macronutrient Split:** 40% carbs, 30% protein, 30% fats\n\n**Sample Meal Ideas:**\n• Breakfast: Oatmeal with banana and Greek yogurt\n• Lunch: Grilled chicken salad with quinoa and veggies\n• Dinner: Salmon with sweet potatoes and broccoli\n• Snacks: Apple with almond butter, or protein shake\n\nStay hydrated (aim for 3-4 liters of water daily) and focus on whole foods! 🥗";
    } else if (lastMessage.content.toLowerCase().includes('motivation') || lastMessage.content.toLowerCase().includes('motivate')) {
      mockResponse = "I love that you're focusing on motivation! Here are some tips to stay consistent:\n\n• **Set Small Goals:** Celebrate every workout completed\n• **Track Progress:** Take progress photos and measurements weekly\n• **Find Accountability:** Tell friends about your goals or join a fitness community\n• **Mix It Up:** Try different types of workouts to keep things interesting\n• **Reward Yourself:** Treat yourself after reaching milestones\n\nRemember: Progress > Perfection. Every step counts! 🚀";
    } else {
      mockResponse = "Thanks for your question! As your AI Fitness Coach, I'm here to help with workout plans, nutrition advice, motivation tips, and exercise guidance. \n\nBased on your profile (beginner level, general fitness goal), I can provide personalized recommendations. What specific aspect of fitness would you like help with today?\n\n• 💪 Workout routines and exercise selection\n• 🥗 Nutrition and meal planning\n• 🎯 Goal setting and progress tracking\n• 💡 Motivation and habit building\n\nJust ask away! I'm here to support your fitness journey. 💪";
    }

    return NextResponse.json({ success: true, response: mockResponse });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'An unexpected error occurred';
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
