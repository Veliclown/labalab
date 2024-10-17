import React, { useState } from 'react';
import { Modal, Form, Input, Button, Spin, Steps } from 'antd';

const { Step } = Steps;

const AuthModal = ({ visible, onClose }) => {
    const [loading, setLoading] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [form] = Form.useForm();

    const handleSubmit = async (values) => {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setLoading(false);

        
        if (currentStep < 2) {
            setCurrentStep(currentStep + 1);
        } else {
            onClose(); 
        }
    };

    const steps = [
        {
            title: 'Finished',
            content: (
                <div>
                    <h3>Завершено!</h3>
                    <p>Ваша авторизация завершена.</p>
                    <Button type="primary" onClick={onClose}>
                        Закрыть
                    </Button>
                </div>
            ),
        },
        {
            title: 'In Progress',
            content: (
                <div>
                    <h3>В процесі</h3>
                    <p>Підтвердження вашої інформації...</p>
                    <Button type="primary" onClick={handleSubmit}>
                        Продовжити
                    </Button>
                </div>
            ),
        },
        {
            title: 'Waiting',
            content: (
                <div>
                    <h3>Очікування</h3>
                    <p>Будь ласка, введіть дані для авторизації.</p>
                    <Form form={form} onFinish={handleSubmit}>
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Введіть імʼя користувача!' }]}
                        >
                            <Input placeholder="Ім'я користувача" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Введіть пароль!' }]}
                        >
                            <Input.Password placeholder="Пароль" />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" loading={loading}>
                                Увійти
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            ),
        },
    ];

    return (
        <Modal title="Авторизація" visible={visible} onCancel={onClose} footer={null}>
            <Steps current={currentStep}>
                {steps.map(step => (
                    <Step key={step.title} title={step.title} />
                ))}
            </Steps>
            <div style={{ marginTop: 20 }}>
                {loading ? <Spin /> : steps[2 - currentStep].content} 
            </div>
        </Modal>
    );
};

export default AuthModal;
