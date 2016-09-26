// slack.js
// message: auth.test


function sendMessage(msg, channel) {

	if(msg.length == 0) return;
	var url = "https://slack.com/api/chat.postMessage";
	var slackToken = getSlackToken();

	$.ajax(url, {
		method: "POST",
		data: {
			token: slackToken,
			channel: channel,
			text: msg
		}
	}).then(function(result) {
		console.log(result);
	});
}
function listChannels(ctrl) {
	var url = "https://slack.com/api/channels.list";
	var slackToken = getSlackToken();
	$.ajax(url, {
		method: "POST",
		data: {
			token: slackToken
		}
	}).then(function(result) {
		console.log(result);
		$("#channelCount").val(result.channels.length);
		for(var idx = 0; idx < result.channels.length; idx++) {
			var name = result.channels[idx].name;
			var item = $("<p><input id='chnl"+idx+"' type='radio' name='channel' value='"+name+"'>"+name+"</p>");
			ctrl.append(item);
		}
	});
}
function findChosenChannel() {
	cntChannels = Number( $("#channelCount").val() );
	for(var idx = 0; idx < cntChannels; idx++) {
		var theId = "chnl"+idx;
		var isChecked = document.getElementById(theId).checked;
		if(isChecked) {
			var chName = $("#chnl"+idx).val();
			console.log( chName );
			return chName;
		}
	}
}
