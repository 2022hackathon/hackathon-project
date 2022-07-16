import settingHeading from '../images/settingheader.png'
import SettingsLeft from '../components/SettingsLeft';

import {Link, useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';

const Settings = () => {
  return (
    <div className="setting-page">
      <SettingsLeft />
      <div>
        <div>
          <div>
            <img src={settingHeading} alt="setting header" />
          </div>
         
          <div>
            Fetch new posts/feeds every
          </div>
          <input type="radio" id="age1" name="age" value="30" />
          <label for="age1">Instantly</label>
          <input type="radio" id="age1" name="age" value="30" />
          <label for="age1">Every Hour</label>
          <input type="radio" id="age1" name="age" value="30" />
          <label for="age1">Every Day</label>
          <input type="radio" id="age1" name="age" value="30" />
          <label for="age1">Every Week</label>
          <input type="radio" id="age1" name="age" value="30" />
          <label for="age1">Every 2 Weeks</label>
        </div>
        <div>
          Prioritise posts/feeds if it includes:
        </div>
          
        <Button variant="outlined" size = "small" color="primary">
           SAVE
        </Button>
      </div>
    
      <Link to="/main">
        <Button variant="outlined" size = "small" color="primary">
          BACK
        </Button>
      </Link>

    </div>
  );
};

export default Settings;