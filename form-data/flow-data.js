
export default {
  "elements": [
    {
      "id": "369904ef-b75e-4a9c-84b4-46d0fd25a82f",
      "type": "start",
      "data": {
        "label": "START"
      },
      "position": {
        "x": 134,
        "y": 4
      }
    },
    {
      "id": "6a6ea604-d479-403c-9007-d61192b2968d",
      "type": "decision",
      "data": {
        "label": "Type of card"
      },
      "position": {
        "x": 110,
        "y": 501
      }
    },
    {
      "id": "deac8022-8ab5-4fdd-a0e3-6a83f6a117a4",
      "type": "submission",
      "data": {
        "label": "Submission\n- Generate PDF"
      },
      "position": {
        "x": 34.999999999999886,
        "y": 1145
      }
    },
    {
      "id": "160406ff-789c-42be-8378-007126f9d1b6",
      "type": "end",
      "data": {
        "label": ""
      },
      "position": {
        "x": 103,
        "y": 1230
      }
    },
    {
      "id": "9ef464ab-f65c-4407-8ff9-11303acd5a7f",
      "type": "form",
      "position": {
        "x": 77,
        "y": 76.16666666666667
      },
      "data": {
        "label": "Acme\nCredit Card\nApplication Form"
      }
    },
    {
      "id": "84a82db4-67fa-4dff-ad54-22a44d864cd0",
      "type": "form",
      "position": {
        "x": 82.33333333333331,
        "y": 171.16666666666666
      },
      "data": {
        "label": "Applicant Information\n- Name\n- Phone\n- Gender\n- DOB\n- Occupation"
      }
    },
    {
      "id": "4c2ab0af-2416-4f55-84c1-7f05901938a0",
      "type": "form",
      "position": {
        "x": 80.66666666666663,
        "y": 307.16666666666674
      },
      "data": {
        "label": "Applicant Billing Address\n- Address"
      }
    },
    {
      "id": "85180572-0d7f-408e-821d-37b2cd0e5f35",
      "type": "form",
      "position": {
        "x": 79,
        "y": 405.1666666666667
      },
      "data": {
        "label": "Type of card\n- Personal / Business / Student"
      }
    },
    {
      "id": "a9144117-25c5-4a94-ac86-ffeabe15a8eb",
      "type": "form",
      "position": {
        "x": -193.4821515837961,
        "y": 593.3132654053612
      },
      "data": {
        "label": "Personal\n1. Cashback\n2. Travel Credit "
      }
    },
    {
      "id": "95825972-6720-4d6f-aa61-ce1e80d37619",
      "type": "form",
      "position": {
        "x": 59.668087899795665,
        "y": 592.0175807699965
      },
      "data": {
        "label": "Business\n1. US Dollar\n2. Canadian Dollar"
      }
    },
    {
      "id": "5dcf6145-72f9-4f0c-a192-ccd8ca0348ff",
      "type": "form",
      "position": {
        "x": 294.735748497656,
        "y": 601.0175807699965
      },
      "data": {
        "label": "Student\n1. Low Interest Rate\n2. Cashback"
      }
    },
    {
      "id": "93632983-afed-44e3-bd25-2cf9101739dd",
      "type": "form",
      "position": {
        "x": 51.406013484296636,
        "y": 704.1979024067667
      },
      "data": {
        "label": "Add Co-Applicants\n1. Yes / No\n"
      }
    },
    {
      "id": "a8fccbe3-b7c9-4ec2-9390-ea41211ad3d8",
      "type": "decision",
      "position": {
        "x": 74.45591991625639,
        "y": 798.2969957081544
      },
      "data": {
        "label": "Add Co-Applicants"
      }
    },
    {
      "id": "d082bf3e-6360-4736-a5a4-98f6b2b2f386",
      "type": "form",
      "position": {
        "x": 236.26622034544084,
        "y": 876.4952789699571
      },
      "data": {
        "label": "Co-Applicant Information\n- Name\n- Phone\n- Gender\n- DOB\n- Occupation"
      }
    },
    {
      "id": "14ad9135-cc38-482c-a90f-6ca904f2e7de",
      "type": "form",
      "position": {
        "x": 50.32029759865978,
        "y": 1033.0575107296138
      },
      "data": {
        "label": "Consent\n- Consent to do a credit check"
      }
    },
    {
      "id": "e2-4",
      "source": "deac8022-8ab5-4fdd-a0e3-6a83f6a117a4",
      "target": "160406ff-789c-42be-8378-007126f9d1b6",
      "label": "",
      "sourceHandle": null,
      "targetHandle": null,
      "type": "default"
    },
    {
      "id": "reactflow__edge-369904ef-b75e-4a9c-84b4-46d0fd25a82fnull-9ef464ab-f65c-4407-8ff9-11303acd5a7ftop-handle-undefined",
      "source": "369904ef-b75e-4a9c-84b4-46d0fd25a82f",
      "target": "9ef464ab-f65c-4407-8ff9-11303acd5a7f",
      "label": "",
      "sourceHandle": null,
      "targetHandle": "top-handle-undefined",
      "type": "default"
    },
    {
      "source": "9ef464ab-f65c-4407-8ff9-11303acd5a7f",
      "sourceHandle": "bottom-handle-undefined",
      "target": "84a82db4-67fa-4dff-ad54-22a44d864cd0",
      "targetHandle": "top-handle-undefined",
      "id": "reactflow__edge-9ef464ab-f65c-4407-8ff9-11303acd5a7fbottom-handle-undefined-84a82db4-67fa-4dff-ad54-22a44d864cd0top-handle-undefined",
      "type": "default"
    },
    {
      "source": "84a82db4-67fa-4dff-ad54-22a44d864cd0",
      "sourceHandle": "bottom-handle-undefined",
      "target": "4c2ab0af-2416-4f55-84c1-7f05901938a0",
      "targetHandle": "top-handle-undefined",
      "id": "reactflow__edge-84a82db4-67fa-4dff-ad54-22a44d864cd0bottom-handle-undefined-4c2ab0af-2416-4f55-84c1-7f05901938a0top-handle-undefined",
      "type": "default"
    },
    {
      "source": "4c2ab0af-2416-4f55-84c1-7f05901938a0",
      "sourceHandle": "bottom-handle-undefined",
      "target": "85180572-0d7f-408e-821d-37b2cd0e5f35",
      "targetHandle": "top-handle-undefined",
      "id": "reactflow__edge-4c2ab0af-2416-4f55-84c1-7f05901938a0bottom-handle-undefined-85180572-0d7f-408e-821d-37b2cd0e5f35top-handle-undefined",
      "type": "default"
    },
    {
      "source": "85180572-0d7f-408e-821d-37b2cd0e5f35",
      "sourceHandle": "bottom-handle-undefined",
      "target": "6a6ea604-d479-403c-9007-d61192b2968d",
      "targetHandle": "top-handle-undefined",
      "id": "reactflow__edge-85180572-0d7f-408e-821d-37b2cd0e5f35bottom-handle-undefined-6a6ea604-d479-403c-9007-d61192b2968dtop-handle-undefined",
      "type": "default"
    },
    {
      "source": "6a6ea604-d479-403c-9007-d61192b2968d",
      "sourceHandle": "bottom-handle-undefined",
      "target": "a9144117-25c5-4a94-ac86-ffeabe15a8eb",
      "targetHandle": "top-handle-undefined",
      "id": "reactflow__edge-6a6ea604-d479-403c-9007-d61192b2968dbottom-handle-undefined-a9144117-25c5-4a94-ac86-ffeabe15a8ebtop-handle-undefined",
      "type": "default"
    },
    {
      "source": "6a6ea604-d479-403c-9007-d61192b2968d",
      "sourceHandle": "bottom-handle-undefined",
      "target": "95825972-6720-4d6f-aa61-ce1e80d37619",
      "targetHandle": "top-handle-undefined",
      "id": "reactflow__edge-6a6ea604-d479-403c-9007-d61192b2968dbottom-handle-undefined-95825972-6720-4d6f-aa61-ce1e80d37619top-handle-undefined",
      "type": "default"
    },
    {
      "source": "6a6ea604-d479-403c-9007-d61192b2968d",
      "sourceHandle": "bottom-handle-undefined",
      "target": "5dcf6145-72f9-4f0c-a192-ccd8ca0348ff",
      "targetHandle": "top-handle-undefined",
      "id": "reactflow__edge-6a6ea604-d479-403c-9007-d61192b2968dbottom-handle-undefined-5dcf6145-72f9-4f0c-a192-ccd8ca0348fftop-handle-undefined",
      "type": "default"
    },
    {
      "source": "a9144117-25c5-4a94-ac86-ffeabe15a8eb",
      "sourceHandle": "bottom-handle-undefined",
      "target": "93632983-afed-44e3-bd25-2cf9101739dd",
      "targetHandle": "top-handle-undefined",
      "id": "reactflow__edge-a9144117-25c5-4a94-ac86-ffeabe15a8ebbottom-handle-undefined-93632983-afed-44e3-bd25-2cf9101739ddtop-handle-undefined",
      "type": "default"
    },
    {
      "source": "95825972-6720-4d6f-aa61-ce1e80d37619",
      "sourceHandle": "bottom-handle-undefined",
      "target": "93632983-afed-44e3-bd25-2cf9101739dd",
      "targetHandle": "top-handle-undefined",
      "id": "reactflow__edge-95825972-6720-4d6f-aa61-ce1e80d37619bottom-handle-undefined-93632983-afed-44e3-bd25-2cf9101739ddtop-handle-undefined",
      "type": "default"
    },
    {
      "source": "5dcf6145-72f9-4f0c-a192-ccd8ca0348ff",
      "sourceHandle": "bottom-handle-undefined",
      "target": "93632983-afed-44e3-bd25-2cf9101739dd",
      "targetHandle": "top-handle-undefined",
      "id": "reactflow__edge-5dcf6145-72f9-4f0c-a192-ccd8ca0348ffbottom-handle-undefined-93632983-afed-44e3-bd25-2cf9101739ddtop-handle-undefined",
      "type": "default"
    },
    {
      "source": "93632983-afed-44e3-bd25-2cf9101739dd",
      "sourceHandle": "bottom-handle-undefined",
      "target": "a8fccbe3-b7c9-4ec2-9390-ea41211ad3d8",
      "targetHandle": "top-handle-undefined",
      "id": "reactflow__edge-93632983-afed-44e3-bd25-2cf9101739ddbottom-handle-undefined-a8fccbe3-b7c9-4ec2-9390-ea41211ad3d8top-handle-undefined",
      "type": "default"
    },
    {
      "source": "a8fccbe3-b7c9-4ec2-9390-ea41211ad3d8",
      "sourceHandle": "bottom-handle-undefined",
      "target": "d082bf3e-6360-4736-a5a4-98f6b2b2f386",
      "targetHandle": "top-handle-undefined",
      "id": "reactflow__edge-a8fccbe3-b7c9-4ec2-9390-ea41211ad3d8bottom-handle-undefined-d082bf3e-6360-4736-a5a4-98f6b2b2f386top-handle-undefined",
      "type": "default"
    },
    {
      "source": "d082bf3e-6360-4736-a5a4-98f6b2b2f386",
      "sourceHandle": "bottom-handle-undefined",
      "target": "14ad9135-cc38-482c-a90f-6ca904f2e7de",
      "targetHandle": "top-handle-undefined",
      "id": "reactflow__edge-d082bf3e-6360-4736-a5a4-98f6b2b2f386bottom-handle-undefined-14ad9135-cc38-482c-a90f-6ca904f2e7detop-handle-undefined",
      "type": "default"
    },
    {
      "source": "a8fccbe3-b7c9-4ec2-9390-ea41211ad3d8",
      "sourceHandle": "bottom-handle-undefined",
      "target": "14ad9135-cc38-482c-a90f-6ca904f2e7de",
      "targetHandle": "top-handle-undefined",
      "id": "reactflow__edge-a8fccbe3-b7c9-4ec2-9390-ea41211ad3d8bottom-handle-undefined-14ad9135-cc38-482c-a90f-6ca904f2e7detop-handle-undefined",
      "type": "default"
    },
    {
      "source": "14ad9135-cc38-482c-a90f-6ca904f2e7de",
      "sourceHandle": "bottom-handle-undefined",
      "target": "deac8022-8ab5-4fdd-a0e3-6a83f6a117a4",
      "targetHandle": "top-handle-undefined",
      "id": "reactflow__edge-14ad9135-cc38-482c-a90f-6ca904f2e7debottom-handle-undefined-deac8022-8ab5-4fdd-a0e3-6a83f6a117a4top-handle-undefined",
      "type": "default"
    }
  ],
  "position": [
    166.76299306041813,
    -709.4984901215523
  ],
  "zoom": 1.0593111316816415
};
