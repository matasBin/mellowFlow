export type Quiz = {
    gender: 'male' | 'female';
    quitingReason: string;  //What is your main reason for wanting to quit drinking?
    drinkingReason: string;     //What do you think is the main reason you drink?
    drinkToFitIn: boolean | null;   //Do you ever drink to feel "normal" or fit in with others?
    fomo: boolean | null;   //Do you sometimes feel like you're missing out if you don't participate in group activities or social events?
    drinkingForEscape: boolean | null;  //Do you often find yourself wanting to escape from your daily responsibilities or pressures?
    drinkToRelax: boolean | null;   //Do you often seek ways to relax or unwind after a long, stressful day?
}