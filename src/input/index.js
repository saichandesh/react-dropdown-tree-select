import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames/bind'
import debounce from 'lodash/debounce'
import Tag from '../tag'
import styles from './index.css'

const cx = cn.bind(styles)

const getTags = (tags = [], onDelete) => {
  return tags.map(
    (tag, i) => {
      const { _id, label, tagClassName } = tag
      return (
        <li className={cx('tag-item', tagClassName)} key={`tag-${i}`}>
          <Tag
            label={label}
            id={_id}
            onDelete={onDelete}
          />
        </li>
      )
    }
  )
}

const Input = (props) => {
  const {
    tags,
    onTagRemove,
    inputRef,
    placeholderText = 'Choose...',
    onFocus,
    onBlur
  } = props

  const delayedCallback = debounce((e) => {
    props.onInputChange(e.target.value)
  }, 50, {
    leading: true
  })

  const onInputChange = (e) => {
    e.persist()
    delayedCallback(e)
  }

  return (
    <span>
      <ul className={cx('tag-list')}>
        {getTags(tags, onTagRemove)}
        <li className={cx('tag-item')}>
          <input type='text'
            ref={inputRef}
            placeholder={placeholderText}
            onChange={onInputChange}
            onFocus={onFocus}
            onBlur={onBlur} />
        </li>
      </ul>
    </span>
  )
}

Input.propTypes = {
  tags: PropTypes.array,
  value: PropTypes.string,
  placeholderText: PropTypes.string,
  onInputChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onTagRemove: PropTypes.func,
  inputRef: PropTypes.func
}

export default Input
