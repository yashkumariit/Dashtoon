import React from 'react'
import Comic_panel from './Comic_panel_component/Comic_panel'
import './Comic_body.css'

const Comic_body=({readingMode,setReadingMode})=> {
    
  return (
    <div className='comic_body_box'>
     <Comic_panel box_id={0} readingMode={readingMode} setReadingMode={setReadingMode}  />
     <Comic_panel box_id={1} readingMode={readingMode} setReadingMode={setReadingMode}  />
     <Comic_panel box_id={2} readingMode={readingMode} setReadingMode={setReadingMode}  />
     <Comic_panel box_id={3} readingMode={readingMode} setReadingMode={setReadingMode}  />
     <Comic_panel box_id={4} readingMode={readingMode} setReadingMode={setReadingMode}  />
     <Comic_panel box_id={5} readingMode={readingMode} setReadingMode={setReadingMode}  />
     <Comic_panel box_id={6} readingMode={readingMode} setReadingMode={setReadingMode}  />
     <Comic_panel box_id={7} readingMode={readingMode} setReadingMode={setReadingMode} />
     <Comic_panel box_id={8} readingMode={readingMode} setReadingMode={setReadingMode}  />
     <Comic_panel box_id={9} readingMode={readingMode} setReadingMode={setReadingMode}  />
     
    </div>
  )
}

export default Comic_body
