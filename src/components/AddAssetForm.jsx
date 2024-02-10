import { Form, DatePicker, TimePicker, InputNumber, Button } from "antd";
import { useState } from "react";

const AddAssetForm = ({ coin }) => {
  const [form] = Form.useForm();
  const [disableTime, setDisableTime] = useState(true)

  function onFinish(values) {
    console.log("values:", values);
  }

  function changeValues(changedValue, allValues) {
    console.log(changedValue);
    console.log(allValues);

    if(changedValue.amount || changedValue.amount === 0 || changedValue.price || changedValue.price === 0){
        if (allValues.amount < 0 || allValues.price < 0 || allValues.amount === undefined) {
            form.setFieldsValue({
                total: "-",
            });
            return;
        }
        form.setFieldsValue({
            total: +(changedValue.amount * allValues.price).toFixed(2),
        });
    }
    if(changedValue.date){
      setDisableTime(false)
    }
}

function disabledDateFunction(current) {
  const currentDate = new Date();
  return current && current > currentDate;
}
console.log(form.getFieldValue().date)
function disableTimeOptions(date){
  return {
    disabledHours: () => [22, 23]
  }
}


  return (
    <Form
      form={form}
      onValuesChange={changeValues}
      name="basic"
      labelCol={{
        span: 6,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        width: "100%",
      }}
      initialValues={{
        price: +coin.price.toFixed(2),
      }}
      onFinish={onFinish}
    >
      <Form.Item
        label="Amount"
        name="amount"
        rules={[
          {
            required: true,
            type: "number",
            min: 0,
            message: "Please input amount",
          },
        ]}
      >
        <InputNumber style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item
        label="Price"
        name="price"
        rules={[
          {
            required: true,
            type: "number",
            min: 0,
            message: "Please input price",
          },
        ]}
      >
        <InputNumber style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item label="Total" name="total">
        <InputNumber disabled style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item
        label="Date"
        name="date"
        rules={[
          {
            required: true,
            message: "Please choise date",
          },
        ]}
      >
        <DatePicker style={{ width: "100%" }} disabledDate={disabledDateFunction}/>
      </Form.Item>

      <Form.Item
        label="Time"
        name="time"
      >
        <TimePicker 
        disabledTime={disableTimeOptions}
        disabled={disableTime}
        style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Add Asset
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddAssetForm;
