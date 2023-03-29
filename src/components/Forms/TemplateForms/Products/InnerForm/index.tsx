import React from 'react';

// components
import Rate from '../../../../Antd/Rate';
import Text from '../../../../Antd/Text';
import Input from '../../../../Antd/Input';
import Textarea from '../../../../Antd/Textarea';
import FormField from '../../../FormField';
import DatePicker from '../../../../Antd/DatePicker';
import CategorySelect from '../../../FormComponents/CategorySelect';
import { Col, Row } from 'antd';

const InnerForm = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={12}>
        <FormField name='title' placeholder='Add title' component={Input} />
      </Col>
      <Col span={12}>
        <FormField name='brand' placeholder='Add brand' component={Input} />
      </Col>
      <Col span={12}>
        <FormField name='category' placeholder='Choose category' component={CategorySelect} />
      </Col>
      <Col span={12}>
        <FormField
          name='year'
          placeholder='Choose year'
          component={DatePicker}
          additionalProps={{ disabledDate: (current: any) => current.valueOf() > Date.now() }}
        />
      </Col>
      <Col span={12}>
        <FormField name='price' placeholder='Add price' component={Input} additionalProps={{ addonBefore: '$', type: 'numbers' }} />
      </Col>
      <Col span={12}>
        <FormField name='stock' placeholder='Count in stock' component={Input} additionalProps={{ type: 'number' }} />
      </Col>
      <Text>Choose rating:</Text>
      <FormField name='rating' component={Rate} />
      <FormField name='description' placeholder='Fill information about product' component={Textarea} />
    </Row>
  );
};

export default InnerForm;
