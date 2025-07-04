import React from 'react'
import { Icon } from '../components'
import { client } from 'react-away'

//@ts-ignore
@client(true)
export default (props, feeds: Feeds) => <>
   <h1><Icon id='user' />Login</h1>      

   <progress hidden={!feeds.await}>loading...</progress>

   <form method="POST" data={props.user} 
      action="http://localhost:3000/api/auth"
      bearer="access_token">

      <section grid cols={1}>
         <label>UserName<input bind="username" /></label>
         <label>PassWord<input type="password" bind="password" /></label>
      </section>
      
      <button>Submit</button>
   </form>

   <fieldset shown={!!feeds.fails?.length}>
      <legend>ERROR</legend>
      <ul>{ feeds.fails?.map((x,i) => <li key={i}>{ x.error }</li>) }</ul>
   </fieldset>

   <br />

   <fieldset style={{ wordBreak: 'break-all' }}>
      <legend>token</legend>
      { sessionStorage.getItem("token") }
   </fieldset>
</>