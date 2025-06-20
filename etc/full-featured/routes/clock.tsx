import React, { Suspense } from 'react'
import { server, seo } from 'react-away'

const loading = <h3>Loading content...</h3>
const address = "https://timeapi.io/api/Time/current/zone?timeZone=Europe/Amsterdam"

@server("dynamic") 
@seo('Time Zone', 'Time zone clock...')
export default function(props: any) {
   return <Suspense fallback={loading}>      
         <TimeZone />
      </Suspense>
}

async function TimeZone() {   
   const response = await fetch(address)
   const { year, month, day, hour, minute, seconds } = await response.json()
   const time = `${hour}:${minute}:${seconds}`
   const date = `${year}-${month}-${day}`

   return <React.Fragment>
      <h1>World Clock</h1>
      <h2>Europe/Amistedan timezone</h2>
      <h3 style={{color:'yellow'}}> {date} {time} </h3>
      <h4 await={InnerAsyncComponent}>loading...</h4>
   </React.Fragment>
}

export async function InnerAsyncComponent(props, feeds) {
   await new Promise(promise => setTimeout(promise, 1000))
   return <code><mark>async inner subcomponent !!!</mark></code>
}
