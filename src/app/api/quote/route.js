export async function GET() {
    const data = [
            {
              id: 1,
              text: "Life is what happens when you're busy making other plans.",
              author: "John Lennon"
            },
            {
              id: 2,
              text: "The only way to do great work is to love what you do.",
              author: "Steve Jobs"
            },
            {
              id: 3,
              text: "If you can dream it, you can do it.",
              author: "Walt Disney"
            },
            {
              id: 4,
              text: "Success is not the key to happiness. Happiness is the key to success.",
              author: "Albert Schweitzer"
            },
            {
              id: 5,
              text: "Do what you can, with what you have, where you are.",
              author: "Theodore Roosevelt"
            },
            {
              id: 6,
              text: "In the middle of every difficulty lies opportunity.",
              author: "Albert Einstein"
            },
            {
              id: 7,
              text: "Be yourself; everyone else is already taken.",
              author: "Oscar Wilde"
            },
            {
              id: 8,
              text: "It always seems impossible until it’s done.",
              author: "Nelson Mandela"
            },
            {
              id: 9,
              text: "Everything you can imagine is real.",
              author: "Pablo Picasso"
            },
            {
              id: 10,
              text: "Simplicity is the ultimate sophistication.",
              author: "Leonardo da Vinci"
            }
    ]

    const randomNumber = Math.floor(Math.random() * 10) + 1;
    let quote = data.find(r => r.id === randomNumber)
    if (!quote) {quote = data[0]}
    return Response.json(quote);
  }