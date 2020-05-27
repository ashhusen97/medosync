import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { Button, Icon } from "native-base";
const { width, height } = Dimensions.get("window");
export default class Verficiation extends Component {
  handleNext() {}
  render() {
    console.log(this.props.route.params.item.first_symtomps);
    //   const {} = this.props.route.params.item;
    return (
      <ScrollView contentContainerStyle={styles.Container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>Membership Ship :</Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.membership)}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>MRN Number :</Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.selected)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>Patient Title :</Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.title)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>Patient Surname :</Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.surname)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>Patient forname :</Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.forename)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>DOB : </Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.dob)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>Address :</Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.address)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>Phone number :</Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.phone_number)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>Patient Private :</Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.private_patient) == 0
              ? "No"
              : "Yes"}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>
            Symtomps First Noticed :
          </Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.first_symtomps)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>
            Doctor's First consulted Med History :
          </Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.first_consult)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>
            Previously Claimed for illness
          </Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.related) == 0
              ? "No"
              : "Yes"}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>
            Date when claimed for illness Before:
          </Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.related_date)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>
            Name Of Doctor First Attended Referral: :
          </Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.doctor_name)}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>
            Date Of Doctor First Attended Referral:
          </Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.doctor_date)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>
            Address Of Doctor First Attended Referral:
          </Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.doctor_address)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>
            Admission_IsResult_Of_Accident_YesNo :
          </Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.accident) == 0
              ? "NO"
              : "Yes"}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>Date of Accident :</Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.accidentDate)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>
            Where Did Accident Injury Occur:
          </Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.accidentPlace)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>
            How Did Accident Injury Occur:
          </Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.accidentReason)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>
            Was Accident Injury Fault of Another Party:
          </Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.anotherParty) == -1
              ? ""
              : JSON.stringify(this.props.route.params.item.anotherParty) == 0
              ? "No"
              : "Yes"}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>
            Contact Information of Responsible Party:
          </Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.defaulterName)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>
            Responsible Party_Insurance_Company_Information :
          </Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.insuranceCompany)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>
            Are You Claiming Expenses Via Solicitor:
          </Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.solictorExpense) == -1
              ? ""
              : JSON.stringify(this.props.route.params.item.solictorExpense) ==
                0
              ? "No"
              : "Yes"}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>
            Are You Claiming Expenses Via PIAB:
          </Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.personalBoard) == -1
              ? ""
              : JSON.stringify(this.props.route.params.item.personalBoard) == 0
              ? "No"
              : "Yes"}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>
            Name Address of Solicitor If Applicable:
          </Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.solictorName)}
          </Text>
        </View>
        <Text style={{ fontSize: 18 }}>
          You signature verifies that you have agreed to Laya's tearms and
          conditions as outlined in Section 5. i.e. Data Protection Statement
          and Declaration and Consent.
        </Text>
        <Image
          source={{ uri: this.props.route.params.item.drawing }}
          style={{ width: width - 20, height: 400, resizeMode: "center" }}
        />
        <View
          style={{
            margin: 10,
            alignItems: "flex-end",
            justifyContent: "space-evenly",
          }}
        >
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
              Submit
            </Text>
            <Icon name="send" />
          </Button>
        </View>
      </ScrollView>
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
});
