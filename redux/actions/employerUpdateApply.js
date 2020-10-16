import * as types from '../action_types';
import { Alert } from 'react-native';
import axios from 'axios';


function handleResponse(response, status) {
  if (response.status != 200) {
    return null
  }
  Alert.alert("Đăng kí đã được chuyển sang trạng thái " + status)
}

function ApplyStatus(apply_id, employer_id, status, token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  };

  const bodyParameters = {
    apply_id: apply_id,
    status: status
  };
  axios.put(`http://recruitment.api.pythonistavn.com/api/v1/employers/${employer_id}/applies`,
    bodyParameters,
    config)
    .then(response => handleResponse(response, status)).catch((error) => {console.log(error)})
}


export function approveAction(apply_id, employer_id, token) {
  ApplyStatus(apply_id, employer_id, "approved", token)
  return {
    type: types.APPROVE_APPLY,
    payload: {
      apply_id: apply_id,
      applyStatus: "approved"
    }
  };
}
export function rejectAction(apply_id, employer_id, token) {
  ApplyStatus(apply_id, employer_id, "rejected", token)
  return {
    type: types.REJECT_APPLY,
    payload: {
      apply_id: apply_id,
      applyStatus: "rejected"
    }
  };
}