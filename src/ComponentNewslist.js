import img1 from './img.png'

function NewsList(){
    return (
        <div className='Newslist' id='Newslist'>
            <div className='News'>
                <div className='Left'>
                <div className="Top">
                        <div className="Info-top">
                            <img src={img1} alt="" id="avatar"/>
                            <p className="Author">Authors name</p>
                            <p className="Delimetr">in</p>
                            <p className="Topic">Topics name</p>
                            <p className="Delimetr">•</p>
                            <p className="Date">7 july</p>
                        </div>
                        <div className="Top-text">
                            <p className="Desk1">7 Practical CSS Tips</p>
                            <p className="Desk2">You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.</p>
                        </div>
                    </div>
                    <div class="Info-bottom">
                        <div class="Info">
                            <button class="Info-btn"> 
                                <p id="btn-text">Java Script</p> 
                            </button>
                            <p class="Read">12 min read</p>
                            <p class="Delimetr">·</p>
                            <p class="Sel">Selected for you</p>
                        </div>
                        <div class="Actions">
                            <div class="Icon"></div>
                            <div class="Icon"></div>
                            <div class="Icon"></div>
                        </div>
                    </div>
                </div>
                <img src={img1} />
            </div>
        </div>
    );
}

export default NewsList;