import React from 'react';
import './NewsBlock.modules.css';

function NewsBlock(){
  return(
    <>
      <div className="NewsBlock">
        <div className="image_container">
          <img src="https://img.etimg.com/thumb/msid-101348574,width-1070,height-580,imgsize-331480,overlay-ettech/photo.jpg" />
        </div>
        <div className="details">
          <div className="title">Activision Blizzard's CEO Bobby Kotick defends Microsoft's takeover of the video game-maker - Economic Times</div>
          <div className="desc">Bobby Kotick told a federal judge in San Francisco Wednesday that there's no incentive to deprive Microsoft gaming rivals like Sony of the popular Activision game Call of Duty, because such a move would alienate the franchise's devoted fanbase.</div>
          <div className="moredetails">
            <div className="source">The Times of India</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsBlock;