import { Col, Row } from 'antd';
import { SVGIcon } from '../../utils';
import { FSButton, FSHelmet, FSInput, FSInputPassword } from '../../components';
import styles from './FSLogin.module.css';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

const FSLogin = () => {

  const navigate = useNavigate();

  return (<>
    <FSHelmet title="Login | Nitinn Toss Book" />
    <div className={clsx(styles.FSAuthContainer)}>
      <div className={clsx(styles.FSAuthHeader, "d-flex flex-column align-center justify-center")}>
        <h1 className="text-color-black fw-700 mb-0">Nitinn Toss Book</h1>
        <p className="text-color-gray">Tagline should be here.</p>
      </div>
      <div className="fs-auth-body">
        <div className={styles.FSAuthCard}>
          <div className={clsx(styles.FSAuthCardHeader, "d-flex flex-column align-center justify-center")}>
            <h2 className="text-color-black fw-600 mb-1">Login</h2>
            <p className="text-color-gray">Enter your admin credentials.</p>
          </div>

          <div className="fa-auth-card-body">
            <Row gutter={[0, 24]} style={{ marginBottom: "40px" }}>
              <Col span={24}>
                <FSInput
                  id="fsInputEmail"
                  name="Email"
                  dataTestId="fs-input-email"
                  placeholder="Email"
                  isLarge
                  isLight
                  prefix={SVGIcon.FSicon_Linear_Envelope}
                />
              </Col>
              <Col span={24}>
                <FSInputPassword
                  id="fsPasswordInput"
                  name="Fs Password Input"
                  dataTestId="fs-password-input"
                  placeholder="Password"
                  isLarge
                  prefix={SVGIcon.FSicon_Linear_Lock}
                  className="password-icon"
                />
              </Col>
            </Row>
            <div className="form-btn">
              <FSButton
                id="fsButtonLogin"
                name="Fs Button Login"
                dataTestId="fs-button-login"
                isLarge
                isHoverShineLight
                onClick={() => navigate('/dashboard')}
              >Login</FSButton>
            </div>
          </div>
        </div>
      </div>
    </div >
  </>)
}

export default FSLogin