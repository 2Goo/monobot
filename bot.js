///DuckDuckGo///////////////////////////////
var ddg = require('ddg');
///Weather Underground//////////////////////
var Wunderground = require('wundergroundnode');
var myKey = '5b5618a68b051e33';
var wunderground = new Wunderground(myKey);
///New York Times///////////////////////////
var NYT = require('nyt');
var keys = {
    'article-search': 'bba42cb897b84e4588479cfd8e6f4aea'
};
var nyt = new NYT(keys);
///HTTP Request/////////////////////////////
var request = require('request');
var j = request.jar();
var request = request.defaults({ jar: j })
///StackExchange///////////////////////////
var stackexchange = require('stackexchange');
var options = { version: 2.2 };
var context = new stackexchange(options)
///Game History////////////////////////////
var his = [];
var aow = 0;
var aol = 0;
var total = 0;
///Wikipedia Challenge/////////////////////
var reg = [];
///////////////////////////////////////////
var Discord = require("discord.js");
var ytdl = require('ytdl-core');
var bot = new Discord.Client();
///Voting//////////////////////////////////
var voteon = false;
var votesy = 0;
var votesn = 0;
var votename;
///MusicBot////////////////////////////////
var yturl;
var inchannel = false;
var volume;
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

//Readline Precede
var readline = require('readline'),
rl = readline.createInterface(process.stdin, process.stdout);

//Bot Ready - Set Playing Game
bot.on('ready', () => { bot.setPlayingGame("with fire.") });

//"When a message is sent" function
bot.on("message", function(message){
	var input = message.content.toUpperCase();
if(input ===  "&INFO")
	{
	bot.reply(message, "Hello, I am MonoBot! I am currently in alpha. I am an experimental Discord Bot created by Monotone developers, Nic and Alex, for  use in Monotone!");
		console.log("Info Command Issued.")
	}//Info Command //Info About Bot
if(input ===  "&PING")
 const start = process.hrtime();
 bot.sendMessage(message, "**Pong!**").then(() => {
   const diff = process.hrtime(start);
   bot.sendMessage(message,'**Pong!**\n__${(diff[0] * 1000) + (diff[1] / 1000000)}s__');
   });
		console.log("Ping Command Issued.")
	//Ping Command
if(input ===  "&HELP")
	{
		bot.sendMessage(message, "**__SidBot Command List__**\n\n*Don't include the example brackets when using commands!*\n\n~~---------------------------------------------------------------------------------------------------~~\n**`&NewVote <Vote Name>`** - *Starts a new vote.*\n**`&Vote <+ or ->`** - *Votes on current poll.*\n**`&EndVote`** - *Ends the current poll.*\n**`&Info`** - *A little bit of info about SidBot.*\n**`&WhoIsTheCoolest`** - *Sid Fun.*\n**`&Live`** - *Sid Fun.*\n**`&WhoAreYou`** - *Sid Fun.*\n**`&Ping`** - *Pong! Test bot latency.*\n**`&Report <@Username> <Reason>`** - *Report a user.*\n**`&KillTask`** - *Kill Bot Task.*\n**`&Spam <@Username> <Message>`** - *Spam a message to a user through DM.*\n**`Music&JoinVoice`** - *Join Music Channel.*\n**`Music&LeaveVoice`** - *Destory all current connections, and leave voice channel.*\n**`Music&Pause`** - *Pause Music.*\n**`Music&Resume`** - *Resume Music.*\n**`Music&Volume <Volume>`** - *Set Volume of Music.*\n**`Music&Play <Youtube URL>`** - *Play music from Youtube.*\n**`&Clear <Amount>`** - *Delete a certain amount of messages in a text channel..*\n**`;0;`** - *Simple game!*\n~~---------------------------------------------------------------------------------------------------~~");
		console.log("Help Command Issued.")
}//Help Command
if(input ===  "&KILL")
	{
		if(bot.memberHasRole(message.author, message.channel.server.roles.get('name', 'jsAdmin'))){
			bot.reply("Bot Task Killed.")
			bot.logout();
			console.log("Bot Logged Out.")
		}else{
			bot.reply(message, " you do not have access to this command.")
		}
	}//Bot Logout Command //Logout Bot
if(input ===  ";0;")
	 {
		 console.log("Game command issued.")
		 var dice1 = Math.floor((Math.random() * 3));
		 var dice2 = Math.floor((Math.random() * 3));
		 var rand = Math.floor((Math.random() * (128044 - 128000)));
		 var str = String.fromCodePoint(128000+rand);
		 var toSend = [];
		 if(dice1 == dice2)
		 {
			 toSend.push("**You won!** *Your Prize:* [" + str + "]");
		 }else{
			 toSend.push("You lost.");
		 }
		 bot.sendMessage(message.channel, toSend);
	 }//Game Command
if (input === "&GAMEHISTORY") {
	total = aow + aol;
	winp = aow / total * 100;
	console.log("Game History Command Issued");
	bot.sendMessage(message, "Last 10 Prizes Won (Everyone on server): " + his.toString() + "\nTotal Number of Wins (Everyone on server): " + aow.toString() + "\nTotal Number of Losses (Everyone on server): " + aol.toString() + "\nWin Percentage: " + winp + "%");
} //Game History Command
if(input.startsWith("&REPORT")) {
			var te = input;
			reason = te.split(" "); reason.shift();
			var name = reason.shift();
			bot.sendMessage(message.channel.server.owner, "REPORT: '" + name + "' was reported by '" + message.author.username + "'. Reason: '" + reason.join(" ") + "' | SidBot User Reporter");
			bot.reply(message, " thank you for reporting *'" + name + "'*. We will try to look into this case soon.");
			console.log("Report Command Issued. '" + name + "' was reported by '" + message.author.username + "'. Reason: '" + reason.join(" ") + "' | SidBot User Reporter");
	}//Report User Command
if(input.startsWith("&NEWVOTE")) {
    if(bot.memberHasRole(message.author, message.channel.server.roles.get('name', 'jsAdmin')) || bot.memberHasRole(message.author, message.channel.server.roles.get('name', 'jsMod'))){
            if(voteon === false)
        {
            votename = message.content.split(" ").slice(1).join(" ");
            bot.reply(message, "A new vote was started, with the name, *" + votename + "*.");
            bot.sendMessage(message, ":black_square_button: :white_square_button: @everyone | New Vote Started. Topic: **" + votename + "**. To vote, say `&vote +` or `&vote -` :white_square_button: :black_square_button:");
            voteon = true;
			bot.createRole("175012573039689728",{color : 0xFF0000,hoist : false,name : "jsVote",permissions : ["sendMessages"]});
            votes = 0;
            console.log("NewVote Command Issued. Topic: " + votename + ".");
        }
        else{
            bot.sendMessage(message, "Please wait until the current vote finishes.");
            console.log("NewVote was attempted, but one already exists.");
        }

	} else {
		bot.reply(" you do not have access to this command.");
	}
	}//NewVote Command
if(input.startsWith("&VOTE +")){
	if(bot.memberHasRole(message.author, message.channel.server.roles.get('name', 'jsVote'))){
	bot.reply(" you already voted!")
	}else{
		if(voteon === true) {
		votesy = votesy+1;
		bot.sendMessage(message, ":black_square_button: **Vote Recorded** :black_square_button:");
		console.log("Vote+ Command Issued.");
		bot.addMemberToRole(message.sender, message.channel.server.roles.get('name', 'jsVote'), (error2) => {
			if (!error2) {
			}
    	});
  	}else{
			bot.sendMessage(message, "There are currently no running votes.");
			console.log("Vote+ was attempted, but no poll exists.");
			}
		}
	}//Vote + Command//Vote + Command
if(input.startsWith("&VOTE -")) {
				if(bot.memberHasRole(message.author, message.channel.server.roles.get('name', 'jsVote'))){
	    		bot.reply(" you already voted!")
	     	} else
		   	{
				if(voteon === true) {
				  votesy = votesn+1;
			  	bot.sendMessage(message, ":black_square_button: **Vote Recorded** :black_square_button:");
			  	console.log("Vote- Command Issued.");
		  		bot.addMemberToRole(message.sender, message.channel.server.roles.get('name', 'jsVote'), (error2) => {
				  	if (!error2) {
				// success
				    }
	        });
	       } else {
				  bot.sendMessage(message, "There are currently no running votes.");
			  	console.log("Vote+ was attempted, but no poll exists.");
		    	}
			  }
		  }//Vote - Command
if(input.startsWith("&SPAM")) {
		 if(bot.memberHasRole(message.author, message.channel.server.roles.get('name', 'jsAdmin'))){
			var inputty = input;
			spammessage = inputty.split(" "); spammessage.shift();
			var spamee = spammessage.shift();
			var i = 0;
			while (i < 100) {
				i++;
				bot.sendMessage(message.mentions[0], "**SPAMMER** | *__" + message.author + "__* says: " + spammessage.join(" "))
		  	}
			bot.reply(message, " your spam message to *`" + spamee + "`* has been sent.");
			console.log("Spam Command Issued. '" + message.author.username + "' spammed '" + message.mentions[0] + "'. Message: '" + spammessage.join(" ") + "'");
	    }else{
				bot.reply(" you do not have access to this command.")
			}
		}//Spam User Command
if(input === "&ENDVOTE")
    {

		if(bot.memberHasRole(message.author, message.channel.server.roles.get('name', 'jsAdmin')) || bot.memberHasRole(message.author, message.channel.server.roles.get('name', 'jsMod'))){
			if(voteon === true)
			{
				bot.sendMessage(message, "**__Vote Ended__**\nTopic: **" + votename + "**\n**=RESULTS=**\n** *" + votesy + "* ** Yes Votes\n** *" + votesn + "* ** No Votes");
				voteon = false;
				bot.deleteRole(message.channel.server.roles.get('name', 'jsVote'));
				votesy = 0;
				votesn = 0;
				votename = "";
				console.log("Vote Ended. " + votesy + " votes for Yes. " + votesn + " votes for No.");
			} else {
						bot.sendMessage(message, "No vote is currently running.");
						console.log("VoteEnd was attempted, but no poll exists.");
					}
    } else {
				    bot.reply(" you do not have access to this command.");
		    	}
  	}//EndVote Command
if(input.startsWith("&KICK")) {
	if(bot.memberHasRole(message.author, message.server.roles.get('name', 'jsAdmin'))){
	bot.kickMember(message.mentions[0]);
	bot.sendMessage(message, message.mentions[0] + " has been kicked.");
	console.log(message.mentions[0] + " was kicked by " + message.author);
	bot.sendMessage(message, message.channel.server.owner, message.mentions[0] + " has been kicked by " + message.author);
	}
	else{
		bot.reply(message, " you do not have the permissions to execute this command.");
		}
	} //Kick a User
if(input.startsWith("&BAN")) {
	if(bot.memberHasRole(message.author, message.server.roles.get('name', 'jsAdmin'))){
		if(message.mentions[0] === "@nic#4572"){
			bot.reply(message, " you cannot ban the owner!");
		} else {
			bot.banMember(message.mentions[0]);
			bot.sendMessage(message, message.mentions[0] + " has been banned.");
			console.log(message.mentions[0] + " was banned by " + message.author);
			bot.sendMessage(message, message.channel.server.owner, message.mentions[0] + " has been banned by " + message.author);
		}
	}else{
		bot.reply(message, " you do not have the permissions to execute this command.");
	}
} //Ban a User
if (input == message.server.roles.get('name', 'music').mention() + " JOIN"){
   console.log("Bot Joining Music Channel...");
   bot.joinVoiceChannel("204039785336143872");
   bot.sendMessage(message, "Joined Music Channel.")
		}//MusicBot Join Channel Command
if (input == message.server.roles.get('name', 'music').mention() + " LEAVE"){
			 if(inchannel = true){
	 inchannel = false;
        console.log("Bot Voice Connection Destroying...");
		bot.voiceConnection.destroy();
		bot.sendMessage(message, "Left Music Channel.");
	}
}//MusicBot Leave Channel Command
if (input == message.server.roles.get('name', 'music').mention() + " PAUSE"){
        console.log("Music Paused");
		bot.voiceConnection.pause();
		bot.sendMessage(message, "Music Paused.");
    }//MusicBot Pause Sound Command//MusicBot Pause Sound Command
if (input.startsWith(message.server.roles.get('name', 'music').mention() + " VOLUME")){
				volume = message.content.split(" ")[2];
						console.log("Music Volume Changed");
				bot.voiceConnection.setVolume(volume / 100);
				bot.sendMessage(message, "___**Volume:**___ " + volume * 100 + "%" );
			}//MusicBot Change Volume Command
if (input == message.server.roles.get('name', 'music').mention() + " RESUME"){
        console.log("Music Resumed");
		bot.voiceConnection.resume();
		bot.sendMessage(message, "Music Resumed.");
    }//MusicBot Resume Soung Command
if (input.startsWith(message.server.roles.get('name', 'play').mention())) {
	bot.voiceConnection.stopPlaying();
	yturl = message.content.split(" ").slice(1).join(" ");
	bot.voiceConnection.playRawStream(ytdl(yturl, {filter: 'audioonly'}));
	console.log("Bot Starting Raw Stream...");
	bot.deleteMessage(message);
	bot.sendMessage(message, "Added by '" + message.author + "' | " + "___**MUSIC**___ | Now Playing: " + yturl);
}//MusicBot Play from YouTube URL
if (input == "SEARCH" + message.server.roles.get('name', 'play').mention()){
			/*
			module.exports = YoutubeTrack = function() {
			  Track.apply(this, arguments);




				bot.voiceConnection.stopPlaying();
				yturl = message.content.split(" ").slice(1).join(" ");
				bot.voiceConnection.playRawStream(ytdl(yturl, {filter: 'audioonly'}));
				console.log(yturl);
						console.log("Bot Starting Raw Stream...");
				title =	ytdl.getInfo(yturl, [options], callback(err, info))
				bot.sendMessage(message, "___**MUSIC**___ | Now Playing: " + yturl);
			}
				*/
				bot.sendMessage(message, "This command will play the first video that comes up when a keyword is searched on YouTube. Soon to be implemented.")
			};







	if(input.startsWith("&CLEAR")) {
		var amounttodelete;
		amounttodelete = message.content.split(" ").slice(1).join(" ");
		client.getChannelLogs(msg.channel, amounttodelete, (error, messages) => {
				if (!error) client.deleteMessages(messages);
			 else console.log(error);
					});
		}


});//MusicBot Play from YouTube Keyword Search
if (message.server == null) {
	console.log("User: " + message.author.username + ", sent: " + input);
	}
if(input === "&MUTEALL") {
	bot.sendMessage(message, "*This command is currently not available. It will be implemented soon.*");
	}//Mute all members in Voice Chat
if (input === "&SERVERNEWS") {
	bot.sendMessage(message, "*This command is currently not available. It will be implemented soon.*");
	}//DM a user the current server news
if (input === "&PMPING") {
	bot.sendMessage(message, "PM Message Sent");
	bot.sendMessage(message.author, "Pong!");
	bot.sendMessage(message.author, "*__" + (sentMessage.timestamp - message.timestamp) + "ms__*");
	console.log("Ping PM Message Sent to User:" + message.author.username);
	}//Execute the 'Ping' command, but send the result through DMs.
if (input.startsWith("&BOTNICKNAME")) {
	var nickname_raw = message.content.split(" ");
	var nickname = nickname_raw[1];
	bot.setNickname(message.server.id, nickname);
	console.log("User: " + message.author.username + " changed the bot's nickname to: " + nickname);
	bot.sendMessage(message, "__Bot Nickname__ | '" + nickname + "'");
	}//Change Bot's nickname
if (input.startsWith("&NICKNAME")) {
	var nickname_raw = message.content.split(" ");
	nickname_raw.shift();
	nickname = nickname_raw.join(" ");
	bot.setNickname(message.server.id, nickname, message.author.id);
	console.log("User: " + message.author.username + " changed their nickname to: " + nickname);
	bot.sendMessage(message, "__Your Nickname__ | " + nickname);
} //Change Message Sender Nickname
if (input.startsWith("&BOTGAME")) {
	var game = message.content.split(" ").slice(1).join(" ");
	bot.setPlayingGame(game);
	console.log("User: " + message.author.username + " changed the bot's game status to: " + game);
	bot.sendMessage(message, "__Game__ | Playing **" + game + "**");
} //Change Bot's Currently Playing Game
if (input.startsWith("&BOTSTATUS")) {
	var stat_raw = message.content.split(" ");
	var stat_rawtwo = stat_raw[1];
	if (stat_rawtwo != undefined) {
		var stat = stat_rawtwo.toLowerCase();
		if (stat === "online") {
			bot.setStatus("online");
			console.log("User: " + message.author.username + " changed the bot's status to: Online");
			bot.sendMessage(message, "__Status__ | **Online**");
		}
		else if (stat === "idle") {
			bot.setStatus("idle");
			console.log("User: " + message.author.username + " changed the bot's status to: Idle");
			bot.sendMessage(message, "__Status__ | **Idle**");
		}else{
			bot.sendMessage(message, "'"stat + "' is not a valid status.");
		}
	}else{
		bot.sendMessage(message, "[Blank] is not a valid status.");
	}
} //Change Bot's Status
if (input === "&STARTTYPING") {
	bot.startTyping(message.channel.id);
} //Start to Show Bot as Typing
if (input === "&STOPTYPING") {
	bot.stopTyping(message.channel.id);
} //Stop Showing Bot as Typing
if (input === "&NEWINVITE") {
	bot.createInvite(message.channel.id);
	bot.sendMessage(message, "24 Hour Temporary Invite Created. Check invite list for code.");
	}
} //Create A New Temporary Invite
if (input.startsWith("&USERID")) {
		if (message.mentions[0] == null) {
				bot.sendMessage(message, "Your User ID: **`" + message.author.id + "`**");
		}
		else {
				userMentioned = message.mentions[0];
				bot.sendMessage(message, userMentioned.username + "'s ID: **`" + userMentioned.id + "`**");
		}
} //Pull User ID from Mention or from Null
if (input.startsWith("&MUTEMEMBER")) {
	member = message.mentions[0];
	bot.muteMember(message.mentions[0], message.server);
	bot.sendMessage(message, "Muted memeber: " + member);
	console.log("User: " + message.author.id + " muted: " + member);
} //Mute a member in Voice Chat
if (input.startsWith("&DEAFENMEMBER")) {
	member2 = message.mentions[0];
	bot.deafenMember(message.mentions[0], message.server);
	bot.sendMessage(message, "Deafened memeber: " + member2);
	console.log("User: " + message.author.id + " deafened: " + member2)
} //Deafen a member in Voice Chat
if (input.startsWith("&CHANNELTOPIC")) {
	if (bot.memberHasRole(message.author, message.server.roles.get('name', 'jsAdmin'))) {
	topic_raw = message.content.split(" ");
	topic_raw.shift();
	topic = topic_raw.join(" ");
	bot.setChannelTopic(message.channel, topic);
	bot.sendMessage(message, "Set: " + message.channel.name + "'s topic to: " + topic);
	console.log("User: " + message.author.username + "Set: " + message.channel.name + "'s topic to: " + topic);
	}else{
	bot.sendMessage(message, "You do not have permission to use this command.");
	}
} //Change a Channel's Topic
if (input === ";WIKIPEDIACHALLENGE;") {
	var spage;
	var epage;
	request('en.wikipedia.org/w/api.php?action=query&list=random&rnnamespace=0&rnlimit=2&format=json', function (error, response, body) {
			if (!error && response.statusCode == 200) {
					data = JSON.parse(body);
					spage = data.query.random.title[0];
					epage = data.query.random.title[1];
					bot.sendMessage(message, "@everyone, a new Wikipedia Challenge has been started! \n Start Page:\n __*'" + spage + "'*__\nEnd Page:\n__*'" + epage + "'*__\n \n To Register, Run the Command, **`W$Register`**");
			}
	});
	console.log(data); // Wikipedia Challenge New //New Wikipedia Challenge
if (input === "W$REGISTER") {
	reg.push(message.author.username);
	bot.sendMessage(message, "Registered " + message.author.username + " for the current Wikipedia Challenge");
} //Register for Wikipedia Challenge //Register for Wikipedia Challenge
if (input === "W$START") {
	var myVar = setInterval(myTimer, 1000);

	function myTimer(){
		if(timerleft===-1){
			bot.updateMessage("@everyone, *Game Starts In:* **__0__**", "**The Wikipedia Challenge Starts Now!**")
		}else{
			timerleft = timerleft-1;
			bot.updateMessage("@everyone, *Game Starts In:* **__15__**", "@everyone, *Game Starts In:* **__14__**")
			bot.updateMessage("@everyone, *Game Starts In:* **__14__**", "@everyone, *Game Starts In:* **__13_**")
			bot.updateMessage("@everyone, *Game Starts In:* **__13__**", "@everyone, *Game Starts In:* **__12__**")
			bot.updateMessage("@everyone, *Game Starts In:* **__12__**", "@everyone, *Game Starts In:* **__11__**")
			bot.updateMessage("@everyone, *Game Starts In:* **__11__**", "@everyone, *Game Starts In:* **__10__**")
			bot.updateMessage("@everyone, *Game Starts In:* **__10__**", "@everyone, *Game Starts In:* **__9__**")
			bot.updateMessage("@everyone, *Game Starts In:* **__9__**", "@everyone, *Game Starts In:* **__8__**")
			bot.updateMessage("@everyone, *Game Starts In:* **__8__**", "@everyone, *Game Starts In:* **__7__**")
			bot.updateMessage("@everyone, *Game Starts In:* **__7__**", "@everyone, *Game Starts In:* **__6__**")
			bot.updateMessage("@everyone, *Game Starts In:* **__6__**", "@everyone, *Game Starts In:* **__5__**")
			bot.updateMessage("@everyone, *Game Starts In:* **__5__**", "@everyone, *Game Starts In:* **__4__**")
			bot.updateMessage("@everyone, *Game Starts In:* **__4__**", "@everyone, *Game Starts In:* **__3__**")
			bot.updateMessage("@everyone, *Game Starts In:* **__3__**", "@everyone, *Game Starts In:* **__2__**")
			bot.updateMessage("@everyone, *Game Starts In:* **__2__**", "@everyone, *Game Starts In:* **__1__**")
			bot.updateMessage("@everyone, *Game Starts In:* **__1__**", "@everyone, *Game Starts In:* **__0__**")
		}
	}
	var timerleft = 15;
	bot.sendMessage(message, "Attention anyone who is registered for the Wikipedia Challenge! The challenge will begin shortly! Once you have found the end page, make sure to message __W$Done__!\n Registered: " + reg.toString());
	bot.sendMessage(message, "@everyone, *Game Starts In:* **__" + timerleft + "__**");

} //Start Wikipedia Challenge //Start Wikipedia Challenge
if (input === "W$DONE") {
	if (reg.indexOf(message.author.username) != -1) {
	bot.sendMessage(message, "@everyone, " + message.author.username + " has claimed to have won the Wikipedia Challenge!" + message.author.usermame + ", please send your page trail to chat!");
	reg = [];
	}
	else {
	bot.sendMessage(messsage, "Your username was not registered!");
	}
} //Claim to find end page in Wikipedia Challenge //User found end page in Wikipedia Challenge
if (input === "W$END") {
	bot.sendMessage(message, "The Wikipedia Challenge has ended.");
	reg = [];
	}
}; //End the current Wikipedia Challenge
if (message.isMentioned("204989422133968897")) {
		bot.sendMessage(message, "I'm always watching you, always watching...")
		console.log("User: " + message.author.username + " mentioned MonoBot in channel: " + message.channel.name);
} //Trigger message when bot is mentioned
if (message.everyoneMentioned == true) {
		console.log("User: " + message.author.username + " mentioned @everyone, in channel: " + message.channel.name + " with the message: " + message.content);
		bot.sendMessage(message.server.owner, "User: " + message.author.username + " mentioned @everyone, in channel: " + message.channel.name + " with the message: " + message.content);
} //DM owner when @everyone is mentioned
if (input.startsWith("&EVAL") & message.server == null) {
		code_raw = input.split(" ");
		pass = code_raw[1];
		bot.sendMessage(message, "Password: " + pass);
		if (pass === "MONOTONEDEBUG123") {
				code_raw2 = message.content.split(" ");
				code_raw2.shift();
				code_raw2.shift();
				code = code_raw2.join(" ");
				try {
						eval(code);
				}
				catch(err) {
						bot.sendMessage(message, "The code was attempted, but threw an error: `" + err + "`");
				}
				console.log("User: " + message.author.username + " ran the code: " + code);
				bot.sendMessage(message, "Running Code:\n```js\n" + code + "```");
		}
		else {
				bot.sendMessage(message, "Your password was incorrect.");
		}
} //Eval Code through DM
if (input === "&UPTIME") {
	uptime = bot.uptime / 1000;
	bot.sendMessage(message, "__Uptime__ | `" + uptime + " seconds`");
} //Get Bot's Current Session Uptime
if (input === "&GETBANS") {
	bot.getBans(message.server.id, function (error, users) {
		if (users[0] == null) {
			bot.sendMessage(message, "There are no bans for this server.");
		}
		else {
			bans = users.join(", ");
			bot.sendMessage(message, "__Bans__\n" + message.server.name + "\n" + bans);
		}
	});
} //Get the Server's Current Bans
if (input === "&KICKBOT")
	{
		if(bot.memberHasRole(message.author, message.server.roles.get('name', 'jsAdmin'))){
		bot.sendMessage(message, "Bot Kicked fomr Server");
		bot.leaveServer(message.server.id);
		console.log("Monobot was kicked out of server: " + message.server.name + ", by user: " + message.author.username);
	}
} //Kick Bot from Server
if (input.startsWith("&SEARCH")) {
		query_raw = message.content.split(" ");
		query_raw.shift();
		index = query_raw.shift();
		query = query_raw.join(" ");
		ddg.query(query, function (err, data) {
				try {
						if (query == "" | query == " " | query == null) {
								bot.sendMessage(message, "Please enter a query.");
						}
						else {
								if (index > 3 | isNaN(index) == true) {
										bot.sendMessage(message, "The search index is invalid.");
								}
								else {
										results = data.RelatedTopics;
										if (results[index] == undefined) {
												bot.sendMessage(message, "No results found for: *" + query + "*");
										}
										else {
												bot.sendMessage(message, "*" + query + "* | " + results[index].Text + "" + "\n \n Source: *`ddg`* DuckDuckGo API");
												console.log("User: " + message.author.username + " Searched: " + query);
										}
								}
						}
				}
				catch (err) {
						bot.sendMessage(message, "An error occured: ```" + err + "```");
				}
		});
} //Search DuckDuckGo
if (input.startsWith("&WEATHER")) {
		w_raw = message.content.split(" ");
		w_raw.shift();
		type = w_raw.shift();
		zip = w_raw.join(" ");
		try {
				if (type === "f") {
						wunderground.conditions().request(zip, function (err, response) {
								bot.sendMessage(message, "It is currently" + response.current_observation.temp_f + "°F in " + zip + ".");
						});
				}
				if (type === "c") {
						wunderground.conditions().request(zip, function (err, response) {
								bot.sendMessage(message, "It is currently" + response.current_observation.temp_c + "°C in " + zip + ".");
						});
				}
				if (type === "default") {
						wunderground.forecast().request(zip, function (err, response) {
								bot.sendMessage(message, "__**2-Day Forecast**__ \n *" + raw_zip_form + "*\n**Day 1** \n *" + response.forecast.txt_forecast.forecastday[0].title + "*\n" + response.forecast.txt_forecast.forecastday[0].fcttext + "\n" + "**Day 1 - Night** \n *" + response.forecast.txt_forecast.forecastday[1].title + "*\n" + response.forecast.txt_forecast.forecastday[1].fcttext + "\n" + "**Day 2** \n *" + response.forecast.txt_forecast.forecastday[2].title + "*\n" + response.forecast.txt_forecast.forecastday[2].fcttext + "\n \n Source: *`wundergroundnode`* Weather Underground API");
						});
				}
				if (type === "tts") {
						wunderground.forecast().request(zip, function (err, response) {
								bot.sendTTSMessage(message, "__**2-Day Forecast**__ \n *" + raw_zip_form + "*\n**Day 1** \n *" + response.forecast.txt_forecast.forecastday[0].title + "*\n" + response.forecast.txt_forecast.forecastday[0].fcttext + "\n" + "**Day 1 - Night** \n *" + response.forecast.txt_forecast.forecastday[1].title + "*\n" + response.forecast.txt_forecast.forecastday[1].fcttext + "\n" + "**Day 2** \n *" + response.forecast.txt_forecast.forecastday[2].title + "*\n" + response.forecast.txt_forecast.forecastday[2].fcttext + "\n \n Source: *`wundergroundnode`* Weather Underground API");
						});
				}
				if (type === "station") {
						wunderground.almanac().request(zip, function (err, response) {
								bot.sendMessage(message, "Airport Code For Local Station: " + response.almanac.airport_code);
						});
				}
				if (type === "image") {
						wunderground.forecast().request(zip, function (err, response) {
								bot.sendMessage(message, "__**2-Day Forecast**__ \n *" + raw_zip_form + "*\n  \n" + response.forecast.txt_forecast.forecastday[0].icon_url + "\n" + response.forecast.txt_forecast.forecastday[1].icon_url + "\n" + response.forecast.txt_forecast.forecastday[2].icon_url + "\n \n Source: *`wundergroundnode`* Weather Underground API");
						});
				}
		}
		catch (err) {
				bot.sendMessage(message, "An error occured, try again later.");
		}
} //Pull Weather Reports
if (input.startsWith("TALK ABOUT THE WEATHER") | input.startsWith("WEATHER IN") | input.startsWith("WEATHER AT") | input.startsWith("WHAT'S THE WEATHER LIKE") | input.startsWith("WHAT'S THE WEATHER") | input.startsWith("WHATS THE WEATHER LIKE") | input.startsWith("WHATS THE WEATHER")) { //Pull Weather Requests with Trigger Detect
	var words = message.content.split(' ');
	var raw_zip_form;
	words.forEach((word, index, array) => {
		if (!IsNaN(word))
		raw_zip_form = word;
	});
		wunderground.forecast().request(raw_zip_form, function (err, response) {
				bot.sendMessage(message, "__**2-Day Forecast**__ \n *" + raw_zip_form + "*\n**Day 1** \n *" + response.forecast.txt_forecast.forecastday[0].title + "*\n" + response.forecast.txt_forecast.forecastday[0].fcttext + "\n" + "**Day 1 - Night** \n *" + response.forecast.txt_forecast.forecastday[1].title + "*\n" + response.forecast.txt_forecast.forecastday[1].fcttext + "\n" + "**Day 2** \n *" + response.forecast.txt_forecast.forecastday[2].title + "*\n" + response.forecast.txt_forecast.forecastday[2].fcttext + "\n \n Source: *`wundergroundnode`* Weather Underground API");
		});
}
if (input.startsWith("&NEWS")) {
		//Query Type
		newsq_raw = input.split(" ");
		newsq_raw.shift();
		NType = newsq_raw.shift();
		//Query
		newsq_raw2 = message.content.split(" ");
		newsq_raw2.shift();
		newsq_raw2.shift();
		newsq = newsq_raw2.join(" ");
			//Handling
		if (NType === "HEADLINE") {
				nyt.article.search({ 'q': newsq }, function (response) {
						data = JSON.parse(response);
						bot.sendMessage(message, "__**Latest Headline Matching Your Criteria: **__\n" + data.response.docs[0].headline.main + "\n Article Link: " + data.response.docs[0].web_url + "\n \n Date: " + data.response.docs[0].pub_date + "\n \n Source: *`nyt`* New York Times API");
				});
		}
}//Display Latest Article Matching Criteria from New York Times
if (input === "APIPING") {
		request('http://m.uploadedit.com/ba3s/1470557014567.txt', function (error, response, body) {
				if (!error && response.statusCode == 200) {
						data = JSON.parse(body);
						bot.sendMessage(message, "API Message: " + data.main.meta + " \n " + data.main.message + "\n Access Status: " + data.main.ping);
				}
		})
} //Test Online Host API
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
bot.on("ready", function() {
    console.log("MonoBot Connected Successfully.")
    rl.setPrompt('MonoBot>');
    rl.prompt();
});
rl.on('line', (input) => {
    if (input.startsWith("sendmessage")) {
        var messy_raw = input.split(" ");
        messy_raw.shift();
        var channel = messy_raw.shift();
        var messy = messy_raw.join(" ");
        bot.sendMessage(channel, messy);
        console.log("Sent Message: " + messy + ", to channel: " + channel);
        rl.prompt();
    }
//Console Commandline Commands
if (input === "help") {
	console.log("Console Commands \n sendmessage <channel> <message> \n botstatus <idle or online> \n botname <nickname> \n botgame <game status> \n sendnews <message to server-news> \n importantnews <message to server-news, appends @everyone , to the beginning of it> \n unban <user id> <server id>");
}
if (input === "botstatus idle") {
	bot.setStatus("idle");
	console.log("Bot status set to idle");
}
if (input === "botstatus online") {
	bot.setStatus("online");
	console.log("Bot status set to online");
}
if (input.startsWith("botname")) {
	name_raw = input.split(" ");
	name_raw.shift();
	nickname2 = name_raw.join(" ");
	bot.setNickname("204004806145212416", nickname2);
	console.log("Bot nickname set to: " + nickname2);
}
if (input.startsWith("botgame")) {
	game_raw = input.split(" ");
	game_raw.shift();
	game2 = game_raw.join(" ");
	bot.setPlayingGame(game2);
	console.log("Bot's game status set to: Playing " + game2);
}
if (input.startsWith("sendnews")) {
	news_raw = input.split(" ");
	news_raw.shift();
	news = news_raw.join(" ");
	bot.sendMessage("204042519271440384", news);
	console.log("Sent: " + news + ", to channel server-news");
}
if (input.startsWith("importantnews")) {
	news_raw2 = input.split(" ");
	news_raw2.shift();
	news2 = news_raw2.join(" ");
	bot.sendMessage("204042519271440384", "@everyone , " + news2);
	console.log("Sent: @everyone, " + news2 + ", to channel server-news");
}
if (input.startsWith("unban")) {
	unban_raw = input.split(" ");
	user = unban_raw[1];
	server = unban_raw[2];
	bot.unbanMember(user, server);
	console.log("Unbanned user: " + user + " on server: " + server);
	}
});
//Server Triggers and Corresponding Response Messages
bot.on("serverNewMemeber", function(server, user) {
	bot.sendMessage("204004806145212416", "Welcome to Monotone, " + user.username + ", Message Nic or Alex with any questions!");
});
bot.on("messageDeleted", function (message, channel) {
	console.log("A message was deleted.");
});
bot.on("serverCreated", function (server) {
	console.log("Bot Joined Server: " + server.name + ", id: " + server.id);
});


//Login Bot
bot.loginWithToken("MjA0OTg5NDIyMTMzOTY4ODk3.Cm_mtw.S_2fhJQlvybu5ugVwfEuUSc94Ko");

//Bot Ready
bot.on("ready", function() {
	console.log("MonoBot Runtime Started")
});
