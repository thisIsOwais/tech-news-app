import React from 'react'
import NewsItem from './NewsItem.jsx'
const News = () => {
  return (
    <div className="container my-3">
        <h>New Headlines</h>
        <div className="row">
           <div className="col-md-4">
<NewsItem title="my title" description="my desc"/>
           </div>
           <div className="col-md-4">
<NewsItem title="my title" description="my desc"/>
           </div>
           <div className="col-md-4">
<NewsItem title="my title" description="my desc"/>
           </div>
           <div className="col-md-4">
<NewsItem title="my title" description="my desc"/>
           </div>
        </div>
    </div>
  )
}

export default News