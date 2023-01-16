#main commands and bot creation

import telebot
from decouple import config
from weather import getCurrentWeather
BOT_TOKEN = config('BOT_TOKEN')
bot = telebot.TeleBot(BOT_TOKEN)

weather = ["weather","temp","temprature"]
greetings = ["مرحبا","اهلا","هاي"]
whoAreYou = ["ماذا" , "ما" ]
botName = "billy"

@bot.message_handler(commands=["إبدأ","مساعدة"])
def welcome(message):
    bot.send_message(message.chat.id,"مرحبا في بوت مدونة صِوان")

#answering every message not just commands 
def isMSg(message):
    return True


@bot.message_handler(func=isMSg)
def reply(message):
    words = message.text.split()
    if words[0].lower() in weather :
        report = getCurrentWeather()
        return bot.send_message(message.chat.id,report or "فشل في الحصول على الطقس !!")
    if words[0].lower() in whoAreYou :
        return bot.reply_to(message,f"انا {botName}")
    if words[0].lower() in greetings :
        return bot.reply_to(message,"يا كيف تسير الأمور!")
    else:
        return bot.reply_to(message,"هذا ليس أمرًا لي!")

bot.polling()
