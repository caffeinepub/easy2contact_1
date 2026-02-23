import List "mo:core/List";

actor {
  type ContactRequest = {
    name : Text;
    email : Text;
    company : Text;
    message : Text;
    criteria : Text;
  };

  let contactRequests = List.empty<ContactRequest>();

  public shared ({ caller }) func submitContactForm(
    name : Text,
    email : Text,
    company : Text,
    message : Text,
    criteria : Text,
  ) : async () {
    let newRequest : ContactRequest = {
      name;
      email;
      company;
      message;
      criteria;
    };
    contactRequests.add(newRequest);
  };

  public query ({ caller }) func getAllContactRequests() : async [ContactRequest] {
    contactRequests.toArray();
  };
};
