import React from 'react'
import { Row, Col, Input, Button } from 'antd'
import styles from './Signin.module.css'
import { sign } from 'crypto'

export default function Signin() {
    return (
        <Row align='middle' className={styles.signin_row}>
            <Col span={24}>
                <Row className={styles.signin_contents}>
                    <Col span={12}>
                        <img src="/bg_signin.png" alt="Signin_image" className={styles.signin_bg} />
                    </Col>
                    <Col span={12}>
                        <div className={styles.signin_title}>My Books</div>
                        <div className={styles.signin_subtitle} >PLEASE NOTE YOUR OPINION</div>
                        <div className={styles.signin_underline} />
                        <div className={styles.email_title}>EMAIL <span className={styles.required}>*</span></div>
                        <div className={styles.input_area}><Input placeholder='enter email' /></div>
                        <div className={styles.password_title}>PASSWORD<span className={styles.required}>*</span></div>
                        <div className={styles.input_area}><Input type='password' autoComplete='current-password' name='password' className={styles.input} /></div>
                        <div className={styles.button_area}><Button size='large' className={styles.button}>Singin</Button></div>
                    </Col>
                </Row>
            </Col >
        </Row >
    )

}

