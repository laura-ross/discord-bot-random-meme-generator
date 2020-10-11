
const { Client, MessageAttachment, MessageEmbed } = require("discord.js");
const client = new Client();
const { token, prefix } = require("./config.js");
const randomPuppy = require('random-puppy');

// The randomPuppy npm package generates random memes when you pass in a subreddit as an argument. If there is no argument, it generates a photo of a random puppy.

const subreddits = [
  "meme",
  "memes",
  "MemeEconomy",
  "Memes_Of_The_Dank",
  "MemesIRL",
  "dankmemes",
  "AdviceAnimals",
  "ComedyCemetery",
  "terriblefacebookmemes",
  "funny"
];


client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`)
});

// random puppy command
client.on("message", message => {
  if(message.content === `${prefix}rp`) {
    randomPuppy().then(url => {
      const randomPuppy = new MessageAttachment(url);
      message.channel.send(randomPuppy);
    }).catch(err => {
      console.log(err)
  }
});

// random meme command
client.on("message", message => {
  if(message.content === `${prefix}rm`) {
    const i = Math.abs(Math.floor(Math.random() * subreddits.length - 1));
    randomPuppy(subreddits[i]).then(url => {
      const randomMeme = new MessageAttachment(url);
      message.channel.send(randomMeme);
    }).catch(err => {
      console.log(err)
  }
})

client.login(token);
