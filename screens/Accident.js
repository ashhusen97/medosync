import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import {
  DatePicker,
  Item,
  Input,
  Label,
  Right,
  Button,
  Icon,
} from "native-base";
import moment from "moment";
import RadioForm from "react-native-simple-radio-button";
var radio_props = [
  { label: "No", value: 0 },
  { label: "Yes", value: 1 },
];

export default class Accident extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accident: -1,
      flag: false,
      flag2: false,
      accidentDate: "",
      accidentPlace: "",
      accidentReason: "",
      anotherParty: -1,
      defaulterName: "",
      insuranceCompany: "",
      solictorExpense: -1,
      personalBoard: -1,
      solictorName: "",
    };
  }

  handleAccidentToggle(value) {
    this.setState({
      accident: value,
    });
    if (value == 1) {
      this.setState({ flag: true });
    } else {
      this.setState({ flag: false });
    }
  }
  handleAnotherParty(value) {
    this.setState({
      anotherParty: value,
    });
    if (value == 1) {
      this.setState({ flag2: true });
    } else {
      this.setState({ flag2: false });
    }
  }
  componentDidMount() {
    console.log(this.props.route.params.item);
  }
  handleNext() {
    const {
      accident,
      accidentDate,
      accidentPlace,
      accidentReason,
      anotherParty,
      defaulterName,
      insuranceCompany,
      solictorExpense,
      personalBoard,
      solictorName,
    } = this.state;
    const item = {
      ...this.props.route.params.item,
      accident,
      accidentDate,
      accidentPlace,
      accidentReason,
      anotherParty,
      defaulterName,
      insuranceCompany,
      solictorExpense,
      solictorName,
      personalBoard,
    };
    if (accident !== -1) {
      if (accident === 0) {
        this.props.navigation.navigate("Declartion", { item: item });
      } else {
        if (
          accidentDate === "" ||
          accidentPlace === "" ||
          accidentReason === ""
        ) {
          alert("Field is required");
        } else {
          if (anotherParty === -1) {
            alert("Field is required");
          } else {
            if (anotherParty === 1) {
              if (
                defaulterName === "" ||
                insuranceCompany === "" ||
                solictorExpense === -1 ||
                personalBoard === -1 ||
                solictorName === -1
              ) {
                alert("Field is required");
              } else {
                this.props.navigation.navigate("Declartion", { item: item });
              }
            } else {
              this.props.navigation.navigate("Declartion", { item: item });
            }
          }
        }
      }
    } else {
      alert("Field is required");
    }

    // this.props.route.params.item;
    // this.props.navigation.navigate("Declartion");
  }
  render() {
    return (
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={styles.Container}>
          <View>
            <View style={[styles.Header, styles.borders]}>
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
                Was treatment received directly as a result of an accident?
              </Text>
              <View style={{ flexDirection: "row" }}>
                <RadioForm
                  labelHorizontal={false}
                  formHorizontal={true}
                  style={{ margin: 10 }}
                  initial={-1}
                  buttonSize={20}
                  buttonOuter
                  animation={false}
                  radio_props={radio_props}
                  onPress={this.handleAccidentToggle.bind(this)}
                />
              </View>
            </View>

            {this.state.flag ? (
              <View
                style={{
                  borderColor: "skyblue",
                  borderWidth: 1,
                  backgroundColor: "skyblue",
                  padding: 2,
                  marginTop: 10,
                }}
              >
                <View style={styles.Header}>
                  <Text style={styles.SubHeading}>
                    4. Accident/Injury Section
                  </Text>
                </View>
                <View style={styles.Header}>
                  <Label style={{ marginHorizontal: 13, fontSize: 16 }}>
                    Date of accident/injury: (DD-MM-YYYY):
                  </Label>
                  <DatePicker
                    defaultDate={new Date()}
                    minimumDate={new Date(2000, 1, 1)}
                    maximumDate={new Date()}
                    locale={"en"}
                    timeZoneOffsetInMinutes={""}
                    modalTransparent={false}
                    animationType={"fade"}
                    androidMode={"default"}
                    placeHolderText="select"
                    textStyle={{ color: "green", fontSize: 18 }}
                    placeHolderTextStyle={{ color: "#d3d3d3" }}
                    onDateChange={(e) => {
                      this.setState({ accidentDate: e });
                    }}
                    disabled={false}
                    formatChosenDate={(date) => {
                      return moment(date).format("DD-MM-YYYY");
                    }}
                  />
                </View>
                <View style={styles.Header}>
                  <Item floatingLabel style={{ marginTop: 10 }}>
                    <Label style={{ marginHorizontal: 13, fontSize: 16 }}>
                      Place where accident/injury occurred?
                    </Label>

                    <Input
                      style={{ paddingLeft: 12 }}
                      value={this.state.accidentPlace}
                      onChangeText={(e) => {
                        this.setState({ accidentPlace: e });
                      }}
                    />
                  </Item>
                  <Item floatingLabel style={{ marginTop: 10 }}>
                    <Label style={{ marginHorizontal: 13, fontSize: 16 }}>
                      How accident/injury occurred?
                    </Label>

                    <Input
                      style={{ paddingLeft: 12 }}
                      value={this.state.accidentReason}
                      onChangeText={(e) => {
                        this.setState({ accidentReason: e });
                      }}
                    />
                  </Item>
                </View>
                <View style={[styles.Header]}>
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
                    Was this accident/injury due to the fault of another party?
                  </Text>
                  <View style={{ flexDirection: "row" }}>
                    <RadioForm
                      labelHorizontal={false}
                      formHorizontal={true}
                      style={{ margin: 10 }}
                      initial={-1}
                      buttonSize={20}
                      buttonOuter
                      radio_props={radio_props}
                      onPress={(e) => {
                        this.setState({ anotherParty: e, flag2: e });
                      }}
                    />
                  </View>
                </View>

                {this.state.flag2 ? (
                  <View>
                    <View style={[styles.Header]}>
                      <Label
                        style={{
                          marginHorizontal: 13,
                          fontSize: 16,
                          marginBottom: 5,
                        }}
                      >
                        If yes provide the name and address of person, company
                      </Label>

                      <Item regular style={{ margin: 3 }}>
                        <Input
                          style={{ margin: 3 }}
                          value={this.state.defaulterName}
                          onChangeText={(e) => {
                            this.setState({ defaulterName: e });
                          }}
                        />
                      </Item>
                      <Label
                        style={{
                          marginHorizontal: 13,
                          fontSize: 16,
                          marginBottom: 5,
                        }}
                      >
                        Please provide the name of their insurance company?
                      </Label>

                      <Item regular style={{ margin: 3 }}>
                        <Input
                          style={{ margin: 3 }}
                          value={this.state.insuranceCompany}
                          onChangeText={(e) => {
                            this.setState({ insuranceCompany: e });
                          }}
                        />
                      </Item>
                    </View>
                    <View style={[styles.Header]}>
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
                        Are you claiming these expenses through a Solicitor?
                      </Text>
                      <View style={{ flexDirection: "row" }}>
                        <RadioForm
                          labelHorizontal={false}
                          formHorizontal={true}
                          style={{ margin: 10 }}
                          initial={-1}
                          buttonSize={20}
                          buttonOuter
                          animation={false}
                          radio_props={radio_props}
                          onPress={(e) => {
                            this.setState({ solictorExpense: e });
                          }}
                        />
                      </View>
                    </View>
                    <View style={[styles.Header]}>
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
                        Or through a Personal Injuries Assesment Board? party?
                      </Text>
                      <View style={{ flexDirection: "row" }}>
                        <RadioForm
                          labelHorizontal={false}
                          formHorizontal={true}
                          style={{ margin: 10 }}
                          initial={-1}
                          buttonSize={20}
                          buttonOuter
                          radio_props={radio_props}
                          onPress={(e) => {
                            this.setState({ personalBoard: e });
                          }}
                        />
                      </View>
                      <Label
                        style={{
                          marginHorizontal: 13,
                          fontSize: 16,
                          marginBottom: 5,
                        }}
                      >
                        Name & address of solicitor.
                      </Label>

                      <Item regular style={{ margin: 3 }}>
                        <Input
                          style={{ margin: 3 }}
                          value={this.state.solictorName}
                          onChangeText={(e) => {
                            this.setState({ solictorName: e });
                          }}
                        />
                      </Item>
                    </View>
                  </View>
                ) : null}
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
    paddingBottom: 100,
  },
  Header: {
    backgroundColor: "white",
    marginVertical: 2,
  },
  borders: {
    borderColor: "skyblue",
    borderWidth: 1,
  },
  SubHeading: {
    paddingHorizontal: 4,
    backgroundColor: "#4bb4da",
    fontSize: 17,
    color: "white",
    paddingVertical: 5,
  },
});
