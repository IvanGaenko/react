import * as constants from "../../ActionTypes/errorType";
import { errorTrue } from '../../ActionCreators/errorAction';

describe('actions', () => {
  it('should create an action to errorTrue', () => {
    const payload = 'Finish docs'
    const expectedAction = {
      type: constants.ERROR_TRUE,
      payload
    }
    expect(errorTrue(payload)).toEqual(expectedAction)
  });
});