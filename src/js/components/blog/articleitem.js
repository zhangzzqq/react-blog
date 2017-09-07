import React from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ArticleLabel from './articlelabel';
import '../../../css/blog/articlearea.css';

export default class ArticleItem extends React.Component {
  render() {
    const category = this.props.labels.map((item) => {
      if (item.color === 'd93f0b') {
        return <ArticleLabel key={item.id} id={item.id} name={item.name} color={item.color} />;
      }
      return null;
    });
    const labelList = this.props.labels.map((item) => {
      if (item.color !== '0052cc' && item.color !== 'd93f0b') {
        return <ArticleLabel key={item.id} id={item.id} name={item.name} color={item.color} />;
      }
      return null;
    });
    const time = this.props.time.split('T')[0];
    return (
      <div className="blog-article-item">
        <div className="blog-article-item-title">
          <Link to={`/blog/${this.props.number}`}>{this.props.title}</Link>
        </div>
        <div className="blog-article-item-time"><Icon type="calendar" /> {time}</div>
        <div className="blog-article-item-label"><Icon type="bars" /> {category}<Icon type="tag-o" /> {labelList}</div>
        <div className="blog-article-item-desc">
          <p>{this.props.desc.split('----')[0]}</p>
        </div>
      </div>
    );
  }
}

ArticleItem.defaultProps = {
  number: 'number',
  title: 'title',
  labels: 'label',
  time: 'time',
  desc: 'desc',
};

ArticleItem.propTypes = {
  number: PropTypes.number,
  title: PropTypes.string,
  labels: PropTypes.array,
  time: PropTypes.string,
  desc: PropTypes.string,
};
