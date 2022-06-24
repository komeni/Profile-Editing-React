import { connect } from 'react-redux';

import ProfileComponent from '../components/profile';
import { fetchProfile, saveProfile } from '../actions/actions_profile'

const mapStateToProps = state => {
  return {
    profile : state.profile
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        fetchProfile: () => {
            dispatch(fetchProfile())
        },
        saveProfile: (profile) => {
          dispatch(saveProfile(profile))
        }
    }
}

const Profile = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileComponent);

export default Profile;
