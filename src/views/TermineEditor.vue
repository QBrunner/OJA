<template>
	<div class="termine">
		<div class="calendarWrapper">
			<div class="calendarMonth">
				<div class="monthPrevious" @click="previous">&#60;</div>
				<div class="monthCurrent">{{ months[month] }} {{ year }}</div>
				<div class="monthNext" @click="next">&#62;</div>
			</div>
			<div class="calendarHead">
				<div class="headDay" v-for="(weekday, id) in days" :key="'month' + Math.random() + id">
					{{ weekday }}
				</div>
			</div>
			<div class="calendarBody">
				<div class="bodyWeek" v-for="(row, id1) in visualMonth" :key="'week' + id1">
					<div class="bodyDay" v-for="(col, id2) in row" :key="'day' + id2" @click="select(col.num, col.curMonth)"
					:class="[col.curMonth == month ? 'bodyDayCurrentMonth' : '', (currentDate.getFullYear() == year &&
					currentDate.getMonth() == col.curMonth && currentDate.getDate() == col.num) ? 'bodyDayToday' : '',
					(daySelected.getFullYear() == col.curYear && daySelected.getMonth() == col.curMonth && daySelected.getDate() == col.num) ? 'bodyDaySelected' : '',
					(currentEvents[id1][id2].year != -1) ? 'bodyDayEvent' : '']">
						{{ col.num }}
					</div>
				</div>
			</div>
			<div>
				<div class="row">
					<div class="createButton col-6" @click="showAllOJA">
						Alle OJA-Treffen anzeigen
					</div>
					<div class="createButton col-6" @click="showAll">
						Alle Termine anzeigen
					</div>
					<div class="createButton col-12" @click="newEvent">
						Neues Event hinzufügen
					</div>
				</div>
			</div>
		</div>
		<div class="eventWrapper">
			<div class="editor-event" v-for="(event, index) in shownEvents" :key="'event-' + index">
				<div class="eventSection">
					<h2 class="eventHeading">{{event.day}}. {{months[event.month]}} {{event.year}}</h2>
					<input placeholder="Beschreibung" class="termine-editor-input" v-model="event.title"/>
					<input placeholder="Link" class="termine-editor-input" v-model="event.link"/>
					<span>OJA Treffen? </span>
					<input type="checkbox" v-model="event.isOJA">
					<div class="row buttonRow">
						<div class="createButton col-6" @click="deleteEvent(event.link)">
							Termin Löschen
						</div>
						<div class="createButton col-6"
						@click="$router.push({ name: 'editor-termineName', params: { name: event.link }}).catch(err => {})">
							Link Folgen
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="eventWrapper">
      <textarea class="col-12 jsonContainer" id="finishedJson"></textarea>
			<div class="createButton col-6" @click="createJson">
				Json generieren
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'termines',
		data() {
			return {
				year: 0, //specified year (current year for start)
				month: 0, //current month (current month for start)
				daySelected: 0, //the selected day. Used for showing an event
				currentDate: {},
				date: {},
				visualMonth: [],
				days: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'],
				months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
				events: [],
				currentEvents: [],
				shownEvents: [],
				allVisible: false,
				ojaVisible: false,
			}
		},
		methods: {
			resetDate: function() {
				this.date = new Date()
				this.currentDate = new Date()
				this.year = this.date.getFullYear()
				this.month = this.date.getMonth()
				this.daySelected = new Date(this.year, this.month, this.date.getDate())
				this.events = require('@/assets/Content/Termine/termine.json')
				this.calculateMonths()
				this.calculateAllShownEvents()
			},
			calculateMonths: function() {
				let visualMonth = []
				let firstOfMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay()
				firstOfMonth += 6
				firstOfMonth %= 7 //starting weekday of month
				let nextMonth = this.date.getMonth() + 1
				let nextYear = this.date.getFullYear()
				if(nextMonth == 12){
					nextYear++
					nextMonth = 0
				}
				let pastMonth = this.date.getMonth() - 1
				let pastYear = this.date.getFullYear()
				if(pastMonth == -1){
					pastMonth = 11
					pastYear--
				}
				let numDays = new Date(nextYear, nextMonth, 0).getDate() //number of days of this month

				let numDaysPriorMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate() //number of days of prior month
				for(let i = 0; i < firstOfMonth; i++){
					visualMonth.push({num: (numDaysPriorMonth + 1 - (firstOfMonth - i)), curMonth: pastMonth, curYear: pastYear})
				}
				for(let i = 0; i < numDays; i++){
					visualMonth.push({num: (i + 1), curMonth: this.date.getMonth(), curYear: this.date.getFullYear()})
				}
				let length = visualMonth.length
				length %= 7
				length = 7 - length
				if(length == 7){
					length = 0
				}
				for(let i = 0; i < length; i++){
					visualMonth.push({num: (i +1), curMonth: nextMonth, curYear: nextYear})
				}

				this.visualMonth = [[]]
				this.currentEvents = [[]]
				let visualMonthLength = visualMonth.length / 7
				for(let i = 0; i < visualMonthLength; i++){
					let tmp = []
					let tmpEvent = []
					for(let j = 0; j < 7; j++){
						tmp.push(visualMonth[i * 7 + j])
						tmpEvent.push({year: -1, month: 0, day: 0})
						for(let k = 0; k < this.events.length; k++){
							if(visualMonth[i * 7 + j].num == this.events[k].day &&
							visualMonth[i * 7 + j].curMonth == this.events[k].month &&
							visualMonth[i * 7 + j].curYear == this.events[k].year){
								tmpEvent[j] = (this.events[k])
							}
						}
					}
					this.visualMonth.push(tmp)
					this.currentEvents.push(tmpEvent)
				}

				this.currentEvents = this.currentEvents.slice(1, this.currentEvents.length)
				this.visualMonth = this.visualMonth.slice(1, this.visualMonth.length);
			},
			previous: function() {
				if(this.month == 0){
					this.date = new Date(this.year - 1, 11)
				}
				else{
					this.date = new Date(this.year, this.month -1)
				}
				this.year = this.date.getFullYear()
				this.month = this.date.getMonth()
				this.calculateMonths()
				this.calculateAllShownEvents()
			},
			next: function() {
				if(this.month == 11){
					this.date = new Date(this.year + 1, 0)
				}
				else{
					this.date = new Date(this.year, this.month + 1)
				}
				this.year = this.date.getFullYear()
				this.month = this.date.getMonth()
				this.calculateMonths()
				this.calculateAllShownEvents()
			},
			calculateAllShownEvents: function(){
				this.shownEvents = []
				for(let i = 0; i < this.events.length; i++){
						if(this.events[i].year == this.year && this.events[i].month == this.month){
							this.shownEvents.push(this.events[i])
						}
				}
				this.shownEvents.sort((a, b) => parseFloat(a.day) - parseFloat(b.day));
			},
			calculateShownEvents: function(day){
				this.shownEvents = []
				for(let i = 0; i < this.events.length; i++){
						if(this.events[i].year == this.daySelected.getFullYear() && this.events[i].month == this.daySelected.getMonth() && this.events[i].day == day){
							this.shownEvents.push(this.events[i])
						}
				}
			},
			showAllOJA: function(){
				let meetings = []
				for(let i = 0; i < this.events.length; i++){
					if(this.events[i].isOJA){
						meetings.push(this.events[i])
					}
				}
				meetings.sort((a, b) => parseFloat(a.day) - parseFloat(b.day));
				meetings.sort((a, b) => parseFloat(a.month) - parseFloat(b.month));
				meetings.sort((a, b) => parseFloat(a.year) - parseFloat(b.year));
				this.shownEvents = meetings;
				this.allVisible = false
				this.ojaVisible = true
			},
			showAll: function() {
				let meetings = this.events
				meetings.sort((a, b) => parseFloat(a.day) - parseFloat(b.day));
				meetings.sort((a, b) => parseFloat(a.month) - parseFloat(b.month));
				meetings.sort((a, b) => parseFloat(a.year) - parseFloat(b.year));
				this.shownEvents = meetings;
				this.allVisible = true
				this.ojaVisible = false
			},
			deleteEvent: function(link){
				let meetings = this.events
				for(let i = 0; i != meetings.length; ++i){
					if(meetings[i].link === link){
						meetings.splice(i, 1)
						i--;
					}
				}
				this.events = meetings
				this.calculateMonths()
				if(this.allVisible){
					this.showAll()
				}
				else if (this.ojaVisible){
					this.showAllOJA()
				}
				else{
					this.select(this.daySelected.getDate(), this.daySelected.getMonth())
				}
			},
			newEvent: function(){
				let elem = { year: 0, month: 0, day: 0, title: "", isOJA: false, link: "" }
				elem.year = this.daySelected.getFullYear()
				elem.month = this.daySelected.getMonth()
				elem.day = this.daySelected.getDate()
				this.events.unshift(elem)
				this.calculateMonths()
				this.select(elem.day, elem.month)
			},
			select: function(day, curMonth){
				console.log(day, curMonth)
				let year = this.date.getFullYear()
				let month = this.date.getMonth()
				if(month == 0){
					if(curMonth == 11){
						year--
					}
				}
				else if(month == 11){
					if(curMonth == 0){
						year++
					}
				}
				this.daySelected = new Date(year, curMonth, day)
				this.calculateShownEvents(day)
				this.allVisible = false
				this.ojaVisible = false
			},
			createJson: function(){
				let textarea = document.getElementById('finishedJson')
				let data = JSON.stringify(this.events)
				textarea.value = data
				textarea.select()
				document.execCommand("copy")
			}
		},
		created() {
			this.resetDate()
		},
	}
</script>

<style lang="scss">
	.termine {
			min-height: calc(100vh - 174px);
			margin: 0 30px;
			.calendarWrapper{
				width: 280px;
				margin: 110px auto 0;
				.calendarMonth{
					font-size: 20px;
					font-weight: 800;
					padding: 10px 0;
					width: 100%;
					position: relative;
					.monthPrevious,
					.monthNext {
						position: absolute;
						top: 50%;
						transform: translateY(-50%);
						cursor: pointer;
						width: 30px;
						height: 30px;
						text-align: center;
						transition: 0.5s ease;
						&:hover {
							background-color: #e3001b;
							box-shadow: 0 5px 5px -5px rgba(0,0,0,0.75);
							border-radius: 50%;
							font-weight: 800;
							color: #111;
						}
					}
					.monthNext{
						right: 0;
					}
					.monthCurrent{
						text-align: center;
					}
				}
				.bodyWeek,
				.calendarHead {
					display: block;
					height: 50px;
					width: 100%;
				}
				.headDay,
				.bodyDay {
					display: inline-block;
					width: 40px;
					height: 40px;
					line-height: 40px;
					text-align: center;
				}
				.bodyDay {
					transition: 0.5s ease;
					color: $primary-dark;
					line-height: 40px;
					text-align: center;
					cursor: pointer;
					position: relative;
				}
				.bodyDay:hover {
					color: yellow;
				}
				.bodyDayCurrentMonth {
					color: $primary;
				}
				.bodyDayToday {
					font-weight: 800;
					color: #e3001b;
				}
				.bodyDaySelected {
					//background-color: #e3001b;
					//box-shadow: 0 5px 10px -5px rgba(0, 0, 0, .75);
					//border-radius: 50%;
					transition: 0.5s ease;
					color: yellow;
				}
				.bodyDaySelected:before{
					content: '';
					width: 40px;
					height: 40px;
					line-height: 40px;
					position: absolute;
					left: 50%;
					top: 50%;
					border-radius: 50%;
					border: 2px solid #e3001b;
					transform: translate(-50%, -50%)
				}
				.bodyDayEvent:after{
					transition: 0.3s ease;
					content: '';
					width: 2px;
					background-color: yellow;
					height: 50%;
					position: absolute;
					right: 0px;
					top: 50%;
					transform: translateY(-50%)
				}
				.bodyDayEvent:hover:after{
					width: 7px;
				}
				.calendarHead {
					line-height: 50px;
					position: relative;

					&:after {
						content: ' ';
						position: absolute;
						bottom: 0;
						left: 0;
						right: 0;
						height: 1px;
						background-color: #e3001b;
					}
				}
				.oja-button{
					text-align: center;
					position: relative;
					transition: 0.5s ease;
					padding: 20px 10px;
					border: 2px solid black;
					border-radius: 7px;
					box-shadow: 5px 10px 20px black;
					margin: 20px 0px;
					animation-name: contactFadeIn;
					animation-duration: 1s;
					width: 100%;
					cursor: pointer;
					margin: 20px auto;
				}
				.oja-button:hover{
					scale: 1.02;
				}
			}
			.eventWrapper{
				width: 280px;
				margin: 40px auto 0px auto;
				.editor-event{
					position: relative;
					transition: 0.5s ease;
					padding: 20px 10px;
					border: 2px solid black;
					border-radius: 7px;
					box-shadow: 5px 10px 20px black;
					margin: 20px 0px;
					animation-name: contactFadeIn;
					animation-duration: 1s;
					cursor: pointer;
					.eventSection{
						width: 100%;
						display: inline-block;
						.eventHeading{
							font-size: 5.5vw;
							text-decoration: underline;
						}
						.eventTitle{
							font-size: 5vw;
							margin-left: 10px;
						}
					}
					.eventArrow{
						position: absolute;
						right: 15px;
						top: 50%;
						transform: translateY(-50%);
						transition: 0.5s ease;
					}
				}
				@keyframes contactFadeIn {
					0%{ opacity: 0;}
					100%{ opacity: 1;}
				}
			}
			.switches{
				width: 100%;
				position: relative;
				height: 30px;
				margin-bottom: 50px;
				.switch{
					position: absolute;
					font-size: 40px;
					cursor: pointer;
				}
				.right{
					right: 0px;
				}
				.center{
					left: 50%;
					transform: translate(-50%, 0%)
				}
			}
			.createButton{
				position: relative;
				transition: 0.5s ease;
				padding: 20px 10px;
				border: 2px solid black;
				border-radius: 7px;
				box-shadow: 5px 10px 20px black;
				margin: 5px auto 40px auto;
				cursor: pointer;
				text-align: center;
				display: block;
			}
			.termine-editor-input {
				display: block;
				margin: 10px 0px;
			}
			.buttonRow {
				width: 95%;
				margin: auto;
			}
	}
	@media only screen and (min-width: 460px){
		.termine{
			.calendarWrapper{
				width: 350px;
				.calendarMonth{
					font-size: 30px;
					line-height: 30px;
					.monthPrevious,
					.monthNext {
						width: 30px;
						height: 30px;
					}
				}
				.headDay,
				.bodyDay {
					display: inline-block;
					width: 50px;
					height: 50px;
					line-height: 50px;
					text-align: center;
				}
			}
			.eventWrapper{
				width: 350px;
				margin: 40px auto 0px auto;
				.editor-event{
					.eventIndex{
						h3{
							position: absolute;
							top: 0;
							font-size: 30px;
						}
					}
					.eventSection{
						.eventHeading{
							font-size: 30px;
							text-decoration: underline;
						}
						.eventTitle{
							font-size: 26px;
						}
					}
				}
			}
		}
	}
	@media only screen and (min-width: 768px) {
			.termine {
					min-height: calc(100vh - 194px);
					.calendarWrapper{
						width: 490px;
						margin: 120px auto 0;
						.bodyWeek,
						.calendarHead {
							display: block;
							height: 70px;
							width: 100%;
						}
						.headDay,
						.bodyDay {
							display: inline-block;
							width: 70px;
							height: 70px;
							line-height: 70px;
							text-align: center;
						}
						.headDay{
							line-height: 50px;
						}
					}
					.eventWrapper{
						width: 490px;
					}
			}
	}
	@media only screen and (min-width: 992px) {
			.termine {
					min-height: calc(100vh - 194px);
					.calendarWrapper{
						width: 770px;
						.calendarMonth{
							font-size: 40px;
							line-height: 40px;
							.monthPrevious,
							.monthNext {
								width: 40px;
								height: 40px;
							}
						}
						.bodyWeek,
						.calendarHead {
							display: block;
							height: 70px;
							width: 100%;
						}
						.headDay,
						.bodyDay {
							display: inline-block;
							width: 110px;
							height: 70px;
							line-height: 70px;
							text-align: center;
							font-size: 1.7em;
						}
						.headDay{
							line-height: 50px;
						}
						.bodyDaySelected:before{
							content: '';
							width: 70px;
							height: 70px;
							line-height: 70px;
						}
						.oja-button{
							width: 490px;
						}
					}
					.eventWrapper{
						width: 770px;
					}
			}
	}
</style>
