import React from 'react';

import Related1 from '../img/color/related-1.png';
import Related2 from '../img/color/related-2.png';


function RelatedPost() {
    return (

        <div className="relatedBtn">
            <h2>Related Items</h2>
            <div className="relatedPost">
                <div className="post_row row">
                    <div className="post_col col-6">
                        <a href="#"><img src={Related1} alt="Related Post" /></a>
                    </div>
                    <div className="post_col col-6">
                        <a href="#"><img src={Related2} alt="Related Post" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RelatedPost;