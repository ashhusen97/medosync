import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import RadioForm from "react-native-simple-radio-button";
import {
  DatePicker,
  Item,
  Input,
  Label,
  Picker,
  Icon,
  Textarea,
  Button,
  Right,
} from "native-base";
import moment from "moment";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";
var radio_props = [
  { label: "No", value: 0 },
  { label: "Yes", value: 1 },
];

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //covid
      fever: undefined,
      cough: undefined,
      breath_short: undefined,
      sore_throat: undefined,
      confirmed: undefined,
      travel: undefined,
      healthcare: undefined,

      private: false,
      chosenDate: new Date(),

      showReferal: false,
      membership: undefined,
      selected: undefined,
      title: undefined,
      forename: undefined,
      surname: undefined,
      dob: undefined,
      address: undefined,
      phone_number: undefined,
      private_patient: undefined,
      first_symtomps: undefined,
      first_consult: undefined,
      related: undefined,
      related_date: undefined,
      name_of_doctor: undefined,
      doctor_date: undefined,
      doctor_address: undefined,
    };
  }
  onValueChange(value) {
    this.setState({
      selected: value,
    });
  }
  handleTitle(value) {
    this.setState({
      title: value,
    });
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  handleDOB(newDate) {
    this.setState({ dob: newDate });
  }
  handleFirstSymtomps(newDate) {
    this.setState({ first_symtomps: newDate });
  }
  handleFirstConsults(newDate) {
    this.setState({ first_consult: newDate });
  }
  handleDOB(newDate) {
    this.setState({ dob: newDate });
  }
  handleRelated(value) {}
  handleRelatedDate(value) {
    this.setState({ related_date: value });
  }
  doctor_date(value) {
    this.setState({ doctor_date: value });
  }
  handlePrivate(value) {
    this.setState({ private_patient: value });
    if (value === 0) {
      alert(
        "Your insurance company will not be charged, you will be charged the full price of the treatment because you did not elect to be private"
      );
    }
  }
  handleFever(value) {
    this.setState({
      fever: value,
    });
  }
  handleCough(value) {
    this.setState({
      cough: value,
    });
  }
  handleBreathShort(value) {
    this.setState({
      breath_short: value,
    });
  }
  handleSoreThroat(value) {
    this.setState({
      sore_throat: value,
    });
  }
  handleConfirmed(value) {
    this.setState({
      confirmed: value,
    });
  }
  handleTravel(value) {
    this.setState({
      travel: value,
    });
  }
  handleHealthCare(value) {
    this.setState({
      healthcare: value,
    });
  }
  handlePrevious(value) {
    this.setState({ related: value });
    if (value === 1) {
      this.setState({
        showReferal: true,
      });
    } else {
      this.setState({
        showReferal: false,
      });
    }
  }
  handlePhone(value) {
    let reg = /^(0|08|08[0-9]{1,9})$/;
    if (reg.test(value)) {
      this.setState({ phone_number: value });
    }
  }

  //   handle next

  handleNext() {
    // const {
    //   fever,
    //   cough,
    //   breath_short,
    //   sore_throat,
    //   confirmed,
    //   travel,
    //   healthcare,
    //   selected,
    //   title,
    //   forename,
    //   surname,
    //   dob,
    //   address,
    //   phone_number,
    //   private_patient,
    //   first_symtomps,
    //   first_consult,
    //   related,
    //   name_of_doctor,
    //   doctor_date,
    //   doctor_address,
    // } = this.state;
    // if (
    //   fever !== undefined &&
    //   cough !== undefined &&
    //   breath_short !== undefined &&
    //   sore_throat !== undefined &&
    //   confirmed !== undefined &&
    //   travel !== undefined &&
    //   healthcare !== undefined &&
    //   selected !== undefined &&
    //   title !== undefined &&
    //   forename !== undefined &&
    //   surname !== undefined &&
    //   dob !== undefined &&
    //   address !== undefined &&
    //   phone_number !== undefined &&
    //   private_patient !== undefined &&
    //   first_symtomps !== undefined &&
    //   first_consult !== undefined
    // ) {
    //   this.props.navigation.navigate("Accident");
    // } else {
    //   alert("All fields required");
    // }
    this.props.navigation.navigate("Accident");
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={styles.Container}>
          {/* section 1 */}

          <View style={{ marginBottom: 10 }}>
            <View style={styles.Header}>
              <Text style={styles.CoronaHeading}>
                Important notice: We require patients to fill out the following
                COVID-19 questions.
              </Text>
              <View
                style={{
                  borderBottomColor: "rgba(0,0,0,0.1)",
                  borderBottomWidth: 0.5,
                }}
              >
                <Text
                  style={
                    (styles.Paragraph,
                    {
                      marginHorizontal: 10,
                      fontSize: 16,
                      marginVertical: 10,
                    })
                  }
                >
                  Have you had a fever or chills in the past 7 days?
                </Text>

                <RadioForm
                  labelHorizontal={false}
                  formHorizontal={true}
                  style={{ margin: 10 }}
                  initial={2}
                  buttonSize={20}
                  buttonOuter
                  radio_props={radio_props}
                  onPress={this.handleFever.bind(this)}
                />
              </View>
              <View
                style={{
                  borderBottomColor: "rgba(0,0,0,0.1)",
                  borderBottomWidth: 0.5,
                }}
              >
                <Text
                  style={
                    (styles.Paragraph,
                    {
                      marginHorizontal: 10,
                      fontSize: 16,
                      marginVertical: 10,
                    })
                  }
                >
                  Do you have a cough (new or worsening)?
                </Text>

                <RadioForm
                  labelHorizontal={false}
                  formHorizontal={true}
                  style={{ margin: 10 }}
                  initial={2}
                  buttonSize={20}
                  buttonOuter
                  radio_props={radio_props}
                  onPress={this.handleCough.bind(this)}
                />
              </View>
              <View
                style={{
                  borderBottomColor: "rgba(0,0,0,0.1)",
                  borderBottomWidth: 0.5,
                }}
              >
                <Text
                  style={
                    (styles.Paragraph,
                    {
                      marginHorizontal: 10,
                      fontSize: 16,
                      marginVertical: 10,
                    })
                  }
                >
                  Do you have shortness of breath (new or worsening)?
                </Text>

                <RadioForm
                  labelHorizontal={false}
                  formHorizontal={true}
                  style={{ margin: 10 }}
                  initial={2}
                  buttonSize={20}
                  buttonOuter
                  radio_props={radio_props}
                  onPress={this.handleBreathShort.bind(this)}
                />
              </View>
              <View
                style={{
                  borderBottomColor: "rgba(0,0,0,0.1)",
                  borderBottomWidth: 0.5,
                }}
              >
                <Text
                  style={
                    (styles.Paragraph,
                    {
                      marginHorizontal: 10,
                      fontSize: 16,
                      marginVertical: 10,
                    })
                  }
                >
                  Do you have a sore throat, runny nose, flu-like symptoms (New
                  or worsening)?
                </Text>

                <RadioForm
                  labelHorizontal={false}
                  formHorizontal={true}
                  style={{ margin: 10 }}
                  initial={2}
                  buttonSize={20}
                  buttonOuter
                  radio_props={radio_props}
                  onPress={this.handleSoreThroat.bind(this)}
                />
              </View>
              <View
                style={{
                  borderBottomColor: "rgba(0,0,0,0.1)",
                  borderBottomWidth: 0.5,
                }}
              >
                <Text
                  style={
                    (styles.Paragraph,
                    {
                      marginHorizontal: 10,
                      fontSize: 16,
                      marginVertical: 10,
                    })
                  }
                >
                  Were you exposed to a confirmed COVID-19 case within the last
                  2 weeks?
                </Text>

                <RadioForm
                  labelHorizontal={false}
                  formHorizontal={true}
                  style={{ margin: 10 }}
                  initial={2}
                  buttonSize={20}
                  buttonOuter
                  radio_props={radio_props}
                  onPress={this.handleConfirmed.bind(this)}
                />
              </View>
              <View
                style={{
                  borderBottomColor: "rgba(0,0,0,0.1)",
                  borderBottomWidth: 0.5,
                }}
              >
                <Text
                  style={
                    (styles.Paragraph,
                    {
                      marginHorizontal: 10,
                      fontSize: 16,
                      marginVertical: 10,
                    })
                  }
                >
                  Have you travelled outside Ireland within the last 2 weeks?
                </Text>

                <RadioForm
                  labelHorizontal={false}
                  formHorizontal={true}
                  style={{ margin: 10 }}
                  initial={2}
                  buttonSize={20}
                  buttonOuter
                  radio_props={radio_props}
                  onPress={this.handleTravel.bind(this)}
                />
              </View>
              <View
                style={{
                  borderBottomColor: "rgba(0,0,0,0.1)",
                  borderBottomWidth: 0.5,
                }}
              >
                <Text
                  style={
                    (styles.Paragraph,
                    {
                      marginHorizontal: 10,
                      fontSize: 16,
                      marginVertical: 10,
                    })
                  }
                >
                  Have you worked in or attended a healthcare facility abroad
                  where patients with COVID-19 were being treated?
                </Text>

                <RadioForm
                  labelHorizontal={false}
                  formHorizontal={true}
                  style={{ margin: 10 }}
                  initial={2}
                  buttonSize={20}
                  buttonOuter
                  radio_props={radio_props}
                  onPress={this.handleHealthCare.bind(this)}
                />
              </View>
            </View>
          </View>

          <View
            style={{
              borderColor: "skyblue",
              borderWidth: 1,
              backgroundColor: "#42d7f5",
              padding: 2,
            }}
          >
            <View style={styles.Header}>
              <Text style={styles.SubHeading}>1. Policy Details</Text>
              <View style={{ marginTop: 10 }}>
                <Label style={{ marginHorizontal: 13, fontSize: 16 }}>
                  Membership Number
                  <Icon
                    active
                    name="help"
                    style={{
                      fontSize: 40,
                      color: "blue",
                    }}
                    onPress={() => {
                      alert(
                        "You can find your membership number from the Laya App or leave blank if you dont know it."
                      );
                    }}
                  />
                </Label>
              </View>
              <View style={{ alignItems: "center" }}>
                <SmoothPinCodeInput
                  androidMode="default"
                  cellSize={29}
                  codeLength={10}
                  value={this.state.membership}
                  onTextChange={(e) => {
                    this.setState({ membership: e });
                  }}
                />
              </View>
              <Picker
                mode="dropdown"
                iosHeader="Insurance Company"
                iosIcon={
                  <Icon
                    name="arrow-dropdown-circle"
                    style={{ color: "#007aff", fontSize: 25 }}
                  />
                }
                placeholder="Insurance Company"
                placeholderStyle={{ color: "rgba(0,0,0,0.7)" }}
                placeholderIconColor="#007aff"
                style={{ width: undefined, marginTop: 10 }}
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange.bind(this)}
              >
                <Picker.Item label="Laya - Dublin" value="Dublin" />
                <Picker.Item label="Laya - Galway" value="Galway" />
                <Picker.Item label="Laya - Limeric" value="Limeric" />
              </Picker>
            </View>

            <View style={styles.Header}>
              <Item>
                <Picker
                  mode="dropdown"
                  iosHeader="Title"
                  iosIcon={
                    <Icon
                      name="arrow-dropdown-circle"
                      style={{ color: "#007aff", fontSize: 25 }}
                    />
                  }
                  placeholder="Title"
                  placeholderStyle={{ color: "rgba(0,0,0,0.7)" }}
                  placeholderIconColor="#007aff"
                  style={{ width: undefined, marginTop: 10 }}
                  selectedValue={this.state.title}
                  onValueChange={this.handleTitle.bind(this)}
                >
                  <Picker.Item label="Mr." value="Mr" />
                  <Picker.Item label="Ms." value="Ms" />
                  <Picker.Item label="Miss." value="Miss" />
                  <Picker.Item label="Mrs." value="Mrs" />
                  <Picker.Item label="Dr." value="Dr" />
                  <Picker.Item label="Prof." value="Prof" />
                </Picker>
              </Item>
              <Item floatingLabel style={{ marginTop: 10 }}>
                <Label style={{ marginHorizontal: 13, fontSize: 16 }}>
                  Forenames
                </Label>

                <Input
                  style={{ paddingLeft: 12 }}
                  onChangeText={(e) => {
                    this.setState({ forename: e });
                  }}
                  value={this.state.forename}
                />
              </Item>
              <Item floatingLabel style={{ marginTop: 10 }}>
                <Label style={{ marginHorizontal: 13, fontSize: 16 }}>
                  Surnames
                </Label>

                <Input
                  style={{ paddingLeft: 12 }}
                  onChangeText={(e) => {
                    this.setState({ surname: e });
                  }}
                  value={this.state.surname}
                />
              </Item>
              <Item>
                <Label style={{ marginHorizontal: 13, fontSize: 16 }}>
                  Date of birth
                </Label>
                <DatePicker
                  defaultDate={new Date()}
                  locale={"en"}
                  maximumDate={new Date()}
                  timeZoneOffsetInMinutes={undefined}
                  modalTransparent={false}
                  animationType={"fade"}
                  androidMode={"default"}
                  placeHolderText="select"
                  textStyle={{ color: "green" }}
                  placeHolderTextStyle={{ color: "#d3d3d3" }}
                  onDateChange={this.handleDOB.bind(this)}
                  disabled={false}
                  formatChosenDate={(date) => {
                    return moment(date).format("DD-MM-YYYY");
                  }}
                />
              </Item>
              <Item floatingLabel style={{ marginTop: 10 }}>
                <Label style={{ marginHorizontal: 13, fontSize: 16 }}>
                  Address
                </Label>
                <Icon name="home" style={{ color: "#354ce9", fontSize: 20 }} />
                <Input
                  style={{ paddingLeft: 12 }}
                  value={this.state.address}
                  onChangeText={(e) => {
                    this.setState({ address: e });
                  }}
                />
              </Item>
              <Item floatingLabel style={{ marginTop: 10 }}>
                <Label style={{ marginHorizontal: 13, fontSize: 16 }}>
                  Telephone
                </Label>

                <Input
                  style={{ paddingLeft: 12 }}
                  value={this.state.phone_number}
                  onChangeText={(e) => {
                    this.setState({ phone_number: e });
                  }}
                  keyboardType="phone-pad"
                />
              </Item>
            </View>
          </View>
          <View
            style={[
              styles.Header,
              { borderWidth: 2, borderColor: "skyblue", marginVertical: 10 },
            ]}
          >
            <Text
              style={
                (styles.Paragraph,
                {
                  marginHorizontal: 10,
                  fontSize: 16,
                  marginVertical: 10,
                })
              }
            >
              Did you elect to be a private patient of consultant?
            </Text>

            <RadioForm
              labelHorizontal={false}
              formHorizontal={true}
              style={{ margin: 10 }}
              initial={2}
              buttonSize={20}
              buttonOuter
              radio_props={radio_props}
              onPress={this.handlePrivate.bind(this)}
            />
          </View>

          <View
            style={{
              borderColor: "skyblue",
              borderWidth: 1,
              backgroundColor: "#42d7f5",
              padding: 2,
            }}
          >
            <View style={styles.Header}>
              <Text style={styles.SubHeading}>
                2. History of illness Section
              </Text>

              <Label style={{ marginHorizontal: 13, fontSize: 16 }}>
                When did you/the patient first notice symtomps? (DD-MM-YYYY)
              </Label>
              <DatePicker
                defaultDate={new Date()}
                minimumDate={new Date(2000, 1, 1)}
                maximumDate={new Date()}
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="select"
                textStyle={{ color: "green", fontSize: 18 }}
                placeHolderTextStyle={{ color: "#d3d3d3" }}
                onDateChange={this.handleFirstSymtomps.bind(this)}
                disabled={false}
                formatChosenDate={(date) => {
                  return moment(date).format("DD-MM-YYYY");
                }}
              />
            </View>
            <View style={styles.Header}>
              <Label style={{ marginHorizontal: 13, fontSize: 16 }}>
                When did you/the patient first consult with a doctor for this
                condition? (DD-MM-YYYY)
              </Label>
              <DatePicker
                defaultDate={new Date()}
                minimumDate={new Date(new Date(2000, 1, 1))}
                maximumDate={new Date()}
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="select"
                textStyle={{ color: "green", fontSize: 18 }}
                placeHolderTextStyle={{ color: "#d3d3d3" }}
                onDateChange={this.handleFirstConsults.bind(this)}
                disabled={false}
                formatChosenDate={(date) => {
                  return moment(date).format("DD-MM-YYYY");
                }}
              />
            </View>
            <View style={styles.Header}>
              <Text
                style={
                  (styles.Paragraph,
                  {
                    marginHorizontal: 10,
                    fontSize: 16,
                    marginVertical: 10,
                  })
                }
              >
                Have you/the patient claimed for this or related conditions
                before?
              </Text>
              <View style={{ flexDirection: "row" }}>
                <RadioForm
                  labelHorizontal={false}
                  formHorizontal={true}
                  style={{ margin: 10 }}
                  initial={2}
                  buttonSize={20}
                  buttonOuter
                  radio_props={radio_props}
                  onPress={this.handlePrevious.bind(this)}
                />
              </View>
              <Label style={{ marginHorizontal: 13, fontSize: 16 }}>
                If yes, when ? (DD-MM-YYYY)
              </Label>
              <DatePicker
                defaultDate={new Date()}
                minimumDate={new Date(2000, 1, 1)}
                maximumDate={new Date()}
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="select"
                textStyle={{ color: "green", fontSize: 18 }}
                placeHolderTextStyle={{ color: "#d3d3d3" }}
                onDateChange={this.handleRelatedDate.bind(this)}
                disabled={false}
                formatChosenDate={(date) => {
                  return moment(date).format("DD-MM-YYYY");
                }}
              />
            </View>
          </View>
          {this.state.showReferal ? (
            <View
              style={{
                borderColor: "skyblue",
                borderWidth: 1,
                backgroundColor: "#42d7f5",
                padding: 2,
                marginTop: 10,
              }}
            >
              <View style={styles.Header}>
                <Text style={styles.SubHeading}>3. Referral Details</Text>

                <Item floatingLabel style={{ marginTop: 10 }}>
                  <Label style={{ marginHorizontal: 13, fontSize: 16 }}>
                    Name of Doctor first attended
                  </Label>

                  <Input
                    style={{ paddingLeft: 12 }}
                    value={this.state.name_of_doctor}
                    onChangeText={(e) => {
                      this.setState({ name_of_doctor: e });
                    }}
                  />
                </Item>
              </View>
              <View style={styles.Header}>
                <Label style={{ marginHorizontal: 13, fontSize: 16 }}>
                  Date (DD-MM-YYYY):
                </Label>
                <DatePicker
                  defaultDate={new Date()}
                  minimumDate={new Date(2000, 1, 1)}
                  maximumDate={new Date()}
                  locale={"en"}
                  timeZoneOffsetInMinutes={undefined}
                  modalTransparent={false}
                  animationType={"fade"}
                  androidMode={"default"}
                  placeHolderText="select"
                  textStyle={{ color: "green", fontSize: 18 }}
                  placeHolderTextStyle={{ color: "#d3d3d3" }}
                  onDateChange={this.doctor_date.bind(this)}
                  disabled={false}
                  formatChosenDate={(date) => {
                    return moment(date).format("DD-MM-YYYY");
                  }}
                />
              </View>
              <View style={styles.Header}>
                <Textarea
                  rowSpan={5}
                  bordered
                  placeholder="Doctor's address"
                  onChangeText={(e) => {
                    this.setState({ doctor_address: e });
                  }}
                  value={this.state.doctor_address}
                />
              </View>
            </View>
          ) : null}
          <View style={styles.Header}>
            <Item style={{ borderBottomColor: "white" }}>
              <Right>
                <Button
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 20,
                  }}
                  primary
                  onPress={() => this.handleNext()}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 20,
                      textAlign: "center",
                    }}
                  >
                    Next
                  </Text>
                  <Icon name="send" />
                </Button>
              </Right>
            </Item>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 10,
    paddingVertical: 10,
    paddingBottom: 70,
  },
  Header: {
    backgroundColor: "white",
    marginVertical: 2,
  },
  SubHeading: {
    paddingHorizontal: 4,
    backgroundColor: "#4bb4da",
    fontSize: 17,
    color: "white",
    paddingVertical: 5,
  },
  CoronaHeading: {
    paddingHorizontal: 6,
    backgroundColor: "#ffee00",
    fontSize: 18,
    color: "black",
    paddingVertical: 5,
  },
  Paragraph: {
    fontSize: 16,
  },
});
