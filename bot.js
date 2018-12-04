import discord
from discord.ext.commands import Bot
from discord.ext import commands
import asyncio
import time
from collections import defaultdict


MY_SERVER_ID = 493388045920239647
VERIFIED_ROLE_NAME = "Verified by SnipeLobby"

my_server = None
verified_role = None

class MyClient(Bot):
    def handle_reaction_add(self, reaction, user):
        if self.user.id == user.id:
            print("Reaction from self")
            return
        if reaction.message.author.id != self.user.id:
            return

        member = my_server.get_member(user.id)
        print("Reaction from", member)
        print("Adding role")
        ar = self.add_roles(member, verified_role)
        print(ar)
        asyncio.get_event_loop().create_task(ar)
        print("Added role")

        
        

print(MyClient)
client = MyClient(command_prefix = "?")
client.login(process.env.BOT_TOKEN);
