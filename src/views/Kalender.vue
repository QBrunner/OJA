<template>
	<div class="kalender">
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
					currentDate.getMonth() == month && currentDate.getDate() == col.num) ? 'bodyDayToday' : '',
					(daySelected.getFullYear() == col.curYear && daySelected.getMonth() == col.curMonth && daySelected.getDate() == col.num) ? 'bodyDaySelected' : '',
					(currentEvents[id1][id2].year != -1) ? 'bodyDayEvent' : '']">
						{{ col.num }}
					</div>
				</div>
			</div>
		</div>
		<div class="eventWrapper">
			<div class="event" v-for="(event, index) in shownEvents" :key="'event-' + index">
				<div class="eventSection">
					<h2 class="eventHeading">{{event.day}}. {{months[event.month]}} {{event.year}}</h2>
					<h3 class="eventTitle">{{event.title}} <span class="eventArrow">&rarr;</span></h3>
				</div>
			</div>
		</div>
	</div>
</template>

<!--<div class="day-overview col" v-for="(weekday, id) in daysVisual" :key="'month' + Math.random() + id">
	{{ weekday }}
</div>-->

<script>
	export default {
		name: 'aktionen',
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
				events: [{year: 2020, month: 2, day: 22, title: 'Birthday', link: 'asdf'},
				{year: 2020, month: 2, day: 31, title: 'End of the Month', link: 'asdf'},
				{year: 2020, month: 2, day: 31, title: 'End', link: 'asdf'},
				{year: 2019, month: 11, day: 31, title: 'End of the Month', link: 'asdf'},
				{year: 2020, month: 2, day: 2, title: 'End of the Month', link: 'asdf'}],
				currentEvents: [],
				shownEvents: [],
				showAll: true,
			}
		},
		methods: {
			resetDate: function() {
				this.date = new Date()
				this.currentDate = new Date()
				this.year = this.date.getFullYear()
				this.month = this.date.getMonth()
				this.daySelected = new Date(this.year, this.month, this.date.getDate())
				this.calculateMonths()
				this.showAll = true;
				this.calculateShownEvents()
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
				this.showAll = true;
				this.calculateShownEvents()
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
				this.showAll = true;
				this.calculateShownEvents()
			},
			calculateShownEvents: function(day){
				if(this.showAll){
					this.shownEvents = []
					for(let i = 0; i < this.events.length; i++){
							if(this.events[i].year == this.year && this.events[i].month == this.month){
								this.shownEvents.push(this.events[i])
							}
					}
					this.shownEvents.sort((a, b) => parseFloat(a.day) - parseFloat(b.day));
				}
				else{
					this.shownEvents = []
					for(let i = 0; i < this.events.length; i++){
							if(this.events[i].month == this.daySelected.getMonth() && this.events[i].day == day){
								this.shownEvents.push(this.events[i])
							}
					}
				}
			},
			select: function(day, curMonth){
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
				this.showAll = false
				this.calculateShownEvents(day, month)
			}
		},
		created() {
			this.resetDate()
		},
	}
</script>

<style lang="scss">
	.kalender {
			min-height: calc(100vh - 164px);
			margin: 0 30px;
			.calendarWrapper{
				width: 280px;
				margin: 50px auto 0;
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
					color: $primary-dark;
					line-height: 40px;
					text-align: center;
					cursor: pointer;
					position: relative;
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
					z-index: 1;
					//border-radius: 50%;
					color: yellow;
				}
				.bodyDaySelected:before{
					content: '';
					width: 40px;
					height: 40px;
					line-height: 40px;
					position: absolute;
					z-index: 0;
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
			}
			.eventWrapper{
				width: 280px;
				margin: 40px auto 0px auto;
				.event{
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
							.eventArrow{
								position: absolute;
								margin-left: 5px;
								transition: 0.5s ease;
								transform: translateX(0px);
							}
						}
						.eventTitle:hover{
							.eventArrow{
								transition: 0.5s $easeInOutBack;
								transform: translateX(10px);
							}
						}
					}
				}
				.event:hover{
					scale: 1.02;
				}
				@keyframes contactFadeIn {
					0%{ opacity: 0;}
					100%{ opacity: 1;}
				}
			}
	}
	@media only screen and (min-width: 460px){
		.kalender{
			.calendarWrapper{
				width: 350px;
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
				.event{
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
			.kalender {
					min-height: calc(100vh - 194px);
					.calendarWrapper{
						width: 490px;
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
			.kalender {
					min-height: calc(100vh - 194px);
					.calendarWrapper{
						width: 770px;
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
					}
					.eventWrapper{
						width: 770px;
					}
			}
	}
</style>
