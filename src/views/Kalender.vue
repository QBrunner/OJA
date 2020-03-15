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
					(daySelected.getFullYear() == col.curYear && daySelected.getMonth() == col.curMonth && daySelected.getDate() == col.num) ? 'bodyDaySelected' : '']">
						{{ col.num }}
					</div>
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
				events: [],
				currentEvents: []
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
				let visualMonthLength = visualMonth.length / 7
				for(let i = 0; i < visualMonthLength; i++){
					let tmp = []
					for(let j = 0; j < 7; j++){
						tmp.push(visualMonth[i * 7 + j])
					}
					this.visualMonth.push(tmp)
				}
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
					text-align: center;
				}
				.bodyDay {
					color: $primary-dark;
					line-height: 50px;
					text-align: center;
					cursor: pointer;
				}
				.bodyDayCurrentMonth {
					color: $primary;
				}
				.bodyDayToday {
					font-weight: 800;
					color: #e3001b;
				}
				.bodyDaySelected {
					background-color: #e3001b;
					box-shadow: 0 5px 10px -5px rgba(0, 0, 0, .75);
					border-radius: 50%;
					color: #111;
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
					text-align: center;
				}
			}
		}
	}
	@media only screen and (min-width: 768px) {
			.kalender {
					min-height: calc(100vh - 194px);
			}
	}
</style>
