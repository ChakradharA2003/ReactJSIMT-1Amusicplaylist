import {MdDelete} from 'react-icons/md'
import './index.css'

const SongItem = props => {
  const {details, deleteSong} = props
  const {id, imageUrl, name, genre, duration} = details
  const buttonIcon = <MdDelete size={20} color="#ffffff" />
  const onClickedDelete = () => {
    deleteSong(id)
  }
  return (
    <li className="song-list">
      <div className="song-details-container">
        <img src={imageUrl} alt="track" className="song-image" />
        <div className="song-name-genre-container">
          <p className="song-name">{name}</p>
          <p className="song-genre">{genre}</p>
        </div>
      </div>
      <div className="duration-delete-container">
        <p className="song-duration">{duration}</p>
        {/* eslint-disable react/no-unknown-property */}
        <button
          data-testid="delete"
          type="button"
          className="delete-button"
          onClick={onClickedDelete}
        >
          {buttonIcon}
        </button>
      </div>
    </li>
  )
}
export default SongItem
