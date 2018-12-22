import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Chats from '../../containers/sidebar/Chats'

import GroupSwitch from './chats/GroupSwitch'

import Contacts from '../../containers/sidebar/Contacts'



import Profile from '.././profiles/profile/Profile'

import styles from  './Main.module.css';


const Main = () => (
	<main className={styles.Field}>
		<Switch>
			{/*<Route path='/' exact component={Chats}/>
			<Route path='/chats' component={Chats}/>*/}

			
			<Route path='/' exact component={Chats}/>
			<Route path='/chats' component={GroupSwitch}/>

			<Route path='/contacts' component={Contacts}/>

			<Route path='/account' component={Profile}/>
			<Route path='/profile' component={Profile}/> 

		</Switch>
	</main>
)

export default Main
