// JavaScript for slogan generator
const styleSelect = document.getElementById('style');
const productSelect = document.getElementById('product');
const result = document.getElementById('result');
const generateBtn = document.getElementById('generate');

const slogans = {
   eco: {
      food: [
         'Grown by nature, loved by taste.',
         'Nature knows best — and it shows.',
         'Zero waste. Full flavor.',
         'Crunch responsibly.',
         'From soil to soul.',
         'Pick green. Eat clean.',
         'Sustainable. Delicious.',
      ],
      cosmetics: [
         'Botanicals in every bottle.',
         'Let your skin breathe — naturally.',
         'Eco-beauty that works.',
         'From leaf to glow.',
         'Clean skin, clean planet.',
         'Power of plants in every drop.',
         'Organic luxury for your face.',
      ],
      travel: [
         'Travel light, live bright.',
         'Footprints of wonder — not carbon.',
         'Leave only memories.',
         'Green roads, golden moments.',
         'Adventure, naturally.',
         'Wander with purpose.',
         'Explore with heart and harmony.',
      ],
      clothing: [
         'Wear the change.',
         'Style meets sustainability.',
         'Fashion that breathes.',
         'Threads with a conscience.',
         'Eco-fits that slay.',
         'Dressed to protect the planet.',
         'Look good. Do better.',
      ],
      coffee: [
         'Brewed by nature.',
         'Earthy vibes in every sip.',
         'Your mug. Our mission.',
         'Roasted sustainably.',
         'Drink green. Feel great.',
         'No waste, just taste.',
         'Grounds for a better world.',
      ],
      technology: [
         'Charged by conscience.',
         'Green chips, great ideas.',
         'Sustainable innovation.',
         'Eco-coding, mind-blowing.',
         'Clean energy, clean tech.',
         'Power with purpose.',
         'Reboot with responsibility.',
      ],
      art: [
         "Art that doesn't cost the Earth.",
         'Paint it green.',
         'Inspiration grows wild.',
         'Canvas of conservation.',
         'Express with less.',
         'Create sustainably.',
         'Nature in every stroke.',
      ],
      health: [
         'Heal with harmony.',
         'From forest to pharmacy.',
         'Balanced body, better planet.',
         'Green wellness, real results.',
         'Sustain your strength.',
         'Rooted in real relief.',
         'Whole health, whole Earth.',
      ],
   },
   luxury: {
      food: [
         'Taste that whispers class.',
         'Opulence in every bite.',
         'Crafted for kings and queens.',
         'Five-star flavor, served fast.',
         'Dine like royalty.',
         'Savor the statement.',
         "Because basic isn't in our recipe.",
      ],
      cosmetics: [
         'Glamour meets performance.',
         'Radiance redefined.',
         'Couture skincare.',
         'Pure indulgence, bottled.',
         'Exquisite by nature.',
         'Luxury never felt so soft.',
         'Chic on the cheeks.',
      ],
      travel: [
         'Where elegance meets escape.',
         'Luxury lives here.',
         'Fly first, dream bigger.',
         'Travel beyond limits.',
         'Curated for connoisseurs.',
         'Indulge your wanderlust.',
         'Jetset in style.',
      ],
      clothing: [
         'Tailored for triumph.',
         'Silken rebellion.',
         'Fabric of finesse.',
         'Status in stitches.',
         'Drape yourself in dreams.',
         'Fit for icons.',
         'Wardrobe royalty.',
      ],
      coffee: [
         'Velvet in a cup.',
         'Sip sophistication.',
         'Brewed for the bold.',
         'Taste of the elite.',
         'Rich, rare, roasted.',
         'Coffee that dazzles.',
         'Luxury with crema.',
      ],
      technology: [
         'Elegance in every pixel.',
         'Gadget meets grandeur.',
         'Tech with a crown.',
         'Luxury coded in.',
         'Polished performance.',
         'Smart never looked so sleek.',
         'Beyond premium.',
      ],
      art: [
         'Masterpieces made yours.',
         'Collect the extraordinary.',
         'Art for the refined eye.',
         'Framed in finesse.',
         'Gallery of the glorious.',
         'Exclusivity on canvas.',
         'Designed to dazzle.',
      ],
      health: [
         'Wellness, reimagined.',
         'Luxury of longevity.',
         'Gold-standard health.',
         'Elegance in healing.',
         'Premium care, personal touch.',
         'Nourishment fit for nobility.',
         'Because you deserve elite.',
      ],
   },
   hype: {
      food: [
         'Taste the flex.',
         'Bold flavor, bold you.',
         'No cap, it slaps.',
         'Eat. Post. Repeat.',
         'Street-style bites.',
         'For legends only.',
         'Snack like a king.',
         'Drop that heat.',
         'Bite-sized hype.',
         'Crave it. Own it.',
      ],
      cosmetics: [
         'Slay all day.',
         'Face beat, world shook.',
         'No filter needed.',
         'Loud looks only.',
         'Pop off, queen.',
         'Glow with attitude.',
         'Snatched in seconds.',
         'Brows that wow.',
         'Lit from within.',
         'Serve that face.',
      ],
      travel: [
         'Go viral, go far.',
         'Passport = flexport.',
         'Hype-hop the globe.',
         'Where the WiFi weak, we peak.',
         'Stamps > likes.',
         'Fly high, no chill.',
         'Pack drip, not bags.',
         'Your trip, your story.',
         'Tag the planet.',
         'Views for days.',
      ],
      clothing: [
         'Wear the wow.',
         'Drip official.',
         'Closet: upgraded.',
         'Threads that trend.',
         'Viral fits only.',
         'Level up your look.',
         'Szn-ready style.',
         'Hype stitched in.',
         'Slaywear activated.',
         'Flex, don’t stress.',
      ],
      coffee: [
         'Sip the energy.',
         'Brewed to stunt.',
         'That roast hits.',
         'Hot takes, hot cup.',
         'Buzzed and blessed.',
         'Caffeine drip.',
         'Steam meets stream.',
         'Wake, shake, slay.',
         'Latte like a boss.',
         'Too hot to spill.',
      ],
      technology: [
         'Next-gen everything.',
         'Tap. Snap. Rule.',
         'Charge your legend.',
         'Tech with clout.',
         'Update your life.',
         'Dripped in data.',
         'Your screen, your scene.',
         'Gadget game strong.',
         'Plug in. Glow up.',
         'Built to flex.',
      ],
      art: [
         'Create the chaos.',
         'Art that pops off.',
         'Frame the flex.',
         'Color outside the hype.',
         'Make ‘em look.',
         'Canvas drip.',
         'No chill, just skill.',
         'Vibes, not rules.',
         'Bold strokes, bold moves.',
         'Art that hits.',
      ],
      health: [
         'Wellness = flexness.',
         'Body by hype.',
         'Glow hard.',
         'Drip protein.',
         'Rise and shred.',
         'Sweat and slay.',
         'Hot bod, hotter mind.',
         'Peak mode activated.',
         'Recovery like royalty.',
         'Hyped and hydrated.',
      ],
   },
   ironic: {
      food: [
         'Kale me softly.',
         'Tastes like regret and rosemary.',
         'Now with 50% more irony.',
         'Processed feelings inside.',
         'Seasoned with self-doubt.',
         'Garnished with guilt.',
         'Mood: slightly spicy.',
         'For sad bites only.',
         'Organic? Emotionally, no.',
         'Snack to cope.',
      ],
      cosmetics: [
         'Cry-proof mascara (almost).',
         'Blush away your issues.',
         'Caffeine for your face.',
         'Looks good on bad days.',
         'Eyebags optional.',
         'Lipstick > therapy.',
         'Highlight your flaws.',
         'More drama, less effort.',
         'Glow ironically.',
         'Skincare for screen fatigue.',
      ],
      travel: [
         'Booked to avoid people.',
         'Escape... yourself.',
         'Go where the WiFi is weak.',
         'Instagram lied, this place sucks.',
         'Spiritual journey? Sure.',
         'Cursed cruise.',
         'Just vibing on the run.',
         'Vacay from your responsibilities.',
         'Mood: out of office.',
         'Passport full, heart empty.',
      ],
      clothing: [
         'Dressed to repress.',
         'Cloaked in sarcasm.',
         'This is my laundry day outfit.',
         'Threads for existential dread.',
         'Basic, with layers of irony.',
         'Fresh drip, stale inside.',
         'Outfit: accidental icon.',
         'Unmatched socks. On purpose.',
         'Fashionably confused.',
         "Look like you care. But don't.",
      ],
      coffee: [
         'Sip to feel something.',
         'Mildly awake, perpetually anxious.',
         'Brewed existentialism.',
         'Now with extra bitterness.',
         'For your 3 AM thoughts.',
         'Depresso in a cup.',
         'Hot mess express.',
         'Java & judgment.',
         'Fueling sarcasm since 2020.',
         'One cup closer to okay.',
      ],
      technology: [
         'Update failed. Try again later.',
         "Siri doesn't love you.",
         'Glitch your way to greatness.',
         '404 motivation not found.',
         'Overclock your disappointment.',
         'Now with 100% more notifications.',
         'Stream your sadness.',
         'AI > IRL.',
         'Delete your inner saboteur.',
         'Aesthetic buffering.',
      ],
      art: [
         'Scribbles of emotion.',
         'Masterpiece-ish.',
         'For gallery walls and mental breakdowns.',
         'Sad brushstrokes only.',
         'Modern art or mistake?',
         'This canvas has trust issues.',
         'Abstract confusion.',
         'Art school dropout vibes.',
         'Paint it like it hurts.',
         'Frame the chaos.',
      ],
      health: [
         'Healing? Depends on the day.',
         'One yoga pose from losing it.',
         'Detoxed but still toxic.',
         'Fitness fueled by fear.',
         'Namaste in bed.',
         'Your chakras are in danger.',
         'Gym? I thought you said gin.',
         'Sleep-deprived wellness.',
         'Running on caffeine and bad decisions.',
         'Wellness-ish.',
      ],
   },
   zen: {
      food: [
         'Simple bites, deep peace.',
         'Nourish. Breathe. Repeat.',
         'Flavors in balance.',
         'Mindful meals, joyful life.',
         'Eat the moment.',
         'Tranquility served warm.',
         'Wholesome. Peaceful. Tasty.',
         'Savor silence, savor taste.',
         'Centered around flavor.',
         'Harmony on your plate.',
      ],
      cosmetics: [
         'Calm skin, calm soul.',
         'Beauty in balance.',
         'Gentle rituals, radiant results.',
         'Flow with your glow.',
         'Breathe in. Glow out.',
         'Skin, serenely.',
         'Peaceful pampering.',
         'Serenity, bottled.',
         'Natural stillness. Natural skin.',
         'Less stress, more glow.',
      ],
      travel: [
         'Wander without rush.',
         'Journeys within and beyond.',
         'Stillness across miles.',
         'Travel the quiet way.',
         'Mindful miles.',
         'Slow down, go far.',
         'Peaceful paths await.',
         'Every step a breath.',
         'Soothe your soul globally.',
         'The calm route.',
      ],
      clothing: [
         'Wear ease.',
         'Softness meets stillness.',
         'Form follows flow.',
         'Simple threads. Deep meaning.',
         'Your body, your peace.',
         'Minimalism with grace.',
         'Comfort with clarity.',
         'Inhale. Exhale. Dress.',
         'Fabric for the focused.',
         'Wear the now.',
      ],
      coffee: [
         'Sip slow. Think deep.',
         'A calm roast.',
         'Steeped in serenity.',
         'Mindful brew.',
         'Roasted meditation.',
         'Brew. Breathe. Be.',
         'Peace in a cup.',
         'Stillness per sip.',
         'Clarity with crema.',
         'Tranquil tastes.',
      ],
      technology: [
         'Code in calm.',
         'Designed for peace.',
         'Minimal, mindful, modern.',
         'Zenware for real life.',
         'Quiet innovation.',
         'Soft clicks, strong focus.',
         'Tech in balance.',
         'Streamlined, centered.',
         'Harmony, now downloadable.',
         'Flow-state technology.',
      ],
      art: [
         'Create with quiet.',
         'Brushes meet breath.',
         'Art of the present.',
         'Strokes of stillness.',
         'Meditate in color.',
         'Ink your inner peace.',
         'Visual silence.',
         'Centered on canvas.',
         'Shape your stillness.',
         'Serenity, signed.',
      ],
      health: [
         'Wellness with wisdom.',
         'Peace is the practice.',
         'Inner strength, outer calm.',
         'Flow-based fitness.',
         'Harmony heals.',
         'Health, held softly.',
         'Centered and strong.',
         'Balanced by breath.',
         'Ease into vitality.',
         'Still strong.',
      ],
   },
   retro: {
      food: [
         'Flavors from the good old days.',
         'Dine like it’s 1959.',
         'Old-school bites, new-school hype.',
         'Vintage flavor, timeless taste.',
         'Back when food was love.',
         'Serving nostalgia.',
         'The taste of memories.',
         'Classic meals, modern twist.',
         'Like Grandma used to rock.',
         'Yum with a throwback.',
      ],
      cosmetics: [
         'Pin-up glow, modern wow.',
         'Glamour never gets old.',
         'Retro blush, eternal rush.',
         'Beauty that time can’t fade.',
         'Back in time, ahead in beauty.',
         'Swipe on the past.',
         'Flick that cat-eye, darling.',
         'Nostalgia on your lips.',
         'Old Hollywood in a jar.',
         'Classic rouge forever.',
      ],
      travel: [
         'Wheels up, 1980s style.',
         'Map it the old way.',
         'Retro roadtrip ready.',
         'Fly back in time.',
         'Travel like it’s groovy.',
         'Suitcases with soul.',
         'Polaroid the planet.',
         'Jet lag meets jukebox.',
         'Vinyl vibes, global rides.',
         'Vintage vacations rock.',
      ],
      clothing: [
         'Throwback threads.',
         'Styled in rewind.',
         'Past fashion, present slay.',
         'The ‘fit that flipped eras.',
         'Time travel chic.',
         'Retro realness.',
         'Styled like the legends.',
         'Disco to denim.',
         'Old-school cool.',
         'Groove into the fit.',
      ],
      coffee: [
         'Sip it like it’s analog.',
         'Brewed on a record scratch.',
         'Your grandma’s roast — remastered.',
         'Old beans, bold dreams.',
         'Steamed with style.',
         'Classic roast, eternal mood.',
         'Cassette-strength coffee.',
         'Turntable taste.',
         'Vinyl vibes in a mug.',
         'Flashback flavors.',
      ],
      technology: [
         'Retro shell, modern soul.',
         'Pixels and pride.',
         'Bit by nostalgic bit.',
         'Reboot the old cool.',
         'From floppy to fly.',
         '8-bit brilliance.',
         'Ctrl + Alt + Vintage.',
         'Rad tech, dad vibes.',
         'Style meets silicon.',
         'Analog dreams, digital schemes.',
      ],
      art: [
         'Paint it old-school.',
         'Groovy hues only.',
         'Frame the funk.',
         'Pop art never popped off.',
         'Make it neon.',
         'Bold lines, backbeats.',
         'Retro canvas dance.',
         'Time-lapse techniques.',
         'Disco with brushes.',
         'Throwback color therapy.',
      ],
      health: [
         'Sweat it like the ‘80s.',
         'Jazzercise your soul.',
         'Wellness in legwarmers.',
         'Old vibes, new results.',
         'Aerobics meets analytics.',
         'Retro reps.',
         'Analog abs.',
         'Healing, rewound.',
         'Health cassette.',
         'Strong with style.',
      ],
   },
   geek: {
      food: [
         'Byte-sized snacks.',
         'Eat, sleep, code, repeat.',
         '404: Hunger not found.',
         'Powered by pizza.',
         'Food for thought (and RAM).',
         'Fuel your framework.',
         'Snacc mode enabled.',
         'Dinner.exe launched.',
         'Crunch time? Crunch tacos.',
         'Debug with dessert.',
      ],
      cosmetics: [
         'Glow algorithm activated.',
         'Skin so smooth, it’s AI.',
         'Error: flawless detected.',
         'Beauty meets bandwidth.',
         'Code your perfect look.',
         'Binary blush mode.',
         'Facial firmware updated.',
         'Silicon smooth.',
         'Bot-level precision.',
         'Highlight like a protag.',
      ],
      travel: [
         'Now loading... destination.',
         'Map unlocked.',
         'Globetrotting at 60 fps.',
         'Level up your passport.',
         'Side quest: beach.',
         'Save game. Go offline.',
         'DLC: Real World.',
         'Achievement: left the house.',
         'Pixel-perfect sunsets.',
         'Travel with cheat codes.',
      ],
      clothing: [
         'Wearable syntax.',
         'Geek is the new black.',
         'Style: debugged.',
         'Outfit.exe is running.',
         'Smart looks, smarter mind.',
         'Apparel with APIs.',
         '100% wearable nerd.',
         'Swag with source code.',
         'Layers of logic.',
         'Look like a legend.',
      ],
      coffee: [
         'Caffeinate and conquer.',
         'Brewing logic since 9AM.',
         'For coders and closers.',
         'CTRL + Caffeine.',
         'Debugging fuel.',
         'Java for Java devs.',
         'Latte compiled.',
         'Syntax roast.',
         'Awaken the algorithm.',
         'Coffee = True.',
      ],
      technology: [
         'Next-level nerdware.',
         'Tech it up.',
         'High scores only.',
         'Input: Genius. Output: Awesome.',
         'Your rig. Your rules.',
         'The code behind cool.',
         'Compile your lifestyle.',
         'Powered by passion.',
         'Bits, bytes, brilliance.',
         'Unleash your geek.',
      ],
      art: [
         'Drawn from deep code.',
         'Creative circuits.',
         'Sketch it, script it.',
         'Pixel poetry.',
         'Canvas meets console.',
         'The art of algorithms.',
         'Ctrl+Alt+Create.',
         'ASCII masterpiece.',
         'Brushes and bytes.',
         'Art. Upgraded.',
      ],
      health: [
         'Fitness for final bosses.',
         'Power up your stamina.',
         'Respawn, but stronger.',
         'Wellness patch 2.0.',
         'Hack your habits.',
         'Respiration optimization.',
         'Level up your core.',
         'Reboot your routine.',
         'Cooldown initiated.',
         'Shield yourself with strength.',
      ],
   },
   artsy: {
      food: [
         'A feast for your eyes and taste.',
         'Color your cravings.',
         'Edible expression.',
         'Food as a canvas.',
         'Serve the surreal.',
         'Taste, textured.',
         'Plated poetry.',
         'A bite of beauty.',
         'Cuisine with contrast.',
         'Fork meets flair.',
      ],
      cosmetics: [
         'Face the canvas.',
         'Bold as brushstrokes.',
         'Beauty with a twist.',
         'Paint your palette.',
         'Artistry in a tube.',
         'Makeup = masterpiece.',
         'Liner like lightning.',
         'Abstract your look.',
         'Pop-art pigment.',
         'Craft your contour.',
      ],
      travel: [
         'Wanderlust in watercolor.',
         'Jet-set expressionism.',
         'Cities as brushstrokes.',
         'Frame your journey.',
         'From sketch to skyline.',
         'Inspired itineraries.',
         'Gallery of the globe.',
         'Travel in texture.',
         'Scenery = symmetry.',
         'Strokes of adventure.',
      ],
      clothing: [
         'Drape in creativity.',
         'Style as statement.',
         'Threaded with thought.',
         'Moodboards made wearable.',
         'From sketchpad to streetwear.',
         'Walkable artwork.',
         'Brushstroke chic.',
         'Layered like collage.',
         'Fit that speaks volumes.',
         'Abstract but iconic.',
      ],
      coffee: [
         'Brewed with brushwork.',
         'Sip the surreal.',
         'Espresso with expression.',
         'Coffee on canvas.',
         'Steamed with style.',
         'Cup of creativity.',
         'Bold roast, bold strokes.',
         'Pour-over Picasso.',
         'Inspired by flavor.',
         'Morning muse in a mug.',
      ],
      technology: [
         'Code as creativity.',
         'Design-driven digits.',
         'Aesthetic algorithms.',
         'Logic meets flair.',
         'Tech-art in motion.',
         'Digitally expressive.',
         'Frame the function.',
         'From chip to canvas.',
         'Rendered beauty.',
         'Crafted to code.',
      ],
      art: [
         'Art for the soul’s screen.',
         'Ink your instincts.',
         'Feel it. Frame it.',
         'Make the mess.',
         'Unfiltered vision.',
         'Muse-fueled movement.',
         'Create. Collapse. Repeat.',
         'Your chaos, your colors.',
         'Sketch the storm.',
         'Paint with purpose.',
      ],
      health: [
         'Wellness with wonder.',
         'Paint your peace.',
         'Health as a process.',
         'Emotion in motion.',
         'Creative self-care.',
         'Move like meaning.',
         'Balance as brushwork.',
         'Breathe with beauty.',
         'Shape your self.',
         'Healing, not hiding.',
      ],
   },
};

function getSlogan(style, product) {
   const type = slogans[style]?.[product];
   if (!type) return '✨ The spirits are confused. Try another combo.';
   const index = Math.floor(Math.random() * type.length);
   return type[index];
}

generateBtn.addEventListener('click', () => {
   const style = styleSelect.value;
   const product = productSelect.value;
   const slogan = getSlogan(style, product);

   result.classList.remove('show');
   result.innerText = '';

   setTimeout(() => {
      result.innerText = slogan;
      result.classList.add('show');
   }, 20);
});
