/**
 * Created by xplusz on 9/9/16.
 */
import React from 'react';
import { Link } from 'react-router';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Photo = React.createClass({
    render() {
        var link = '/view/' + this.props.post.code;
        var code = this.props.post.code;
        return (
            <div className="photo">
                <Link to={link}>
                    <img className="img" src={this.props.post.display_src} alt={this.props.post.caption} />
                </Link>

                <div className="photo-bottom-area">
                    <span  onClick={this.props.increment.bind(null, this.props.index)} className="photo-likes">&hearts; {this.props.post.likes}</span>
                    <span className="photo-comments"><i className="icon-comment-alt"></i>
                        {this.props.comments[code]? this.props.comments[code].length : 0}
                    </span>
                </div>
            </div>
        );
    }
});


const PhotoGrid = React.createClass({
    render() {
        return (
            <div className="photo-grid">
                {this.props.posts.map((post, index) => {
                    return <Photo {...this.props} post={post} index={index} key={index}/>
                })}

            </div>
        );
    }
});

export default PhotoGrid;