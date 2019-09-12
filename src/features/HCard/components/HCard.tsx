import React, { PureComponent } from 'react';
import CardItem from './CardItem/CardItem';
import './HCard.css';
import HeaderBar from './HeaderBar/HeaderBar';
import { UserDetails } from '../../HCardBuilder/components/UserDetails';

interface Props extends Partial<UserDetails> {
  avatarUrl?: string;
}

/**
 * A card of user details.
 * If user details are missing they will simply be represented by a blank line.
 */
class HCard extends PureComponent<Props> {
  public getUserDetails() {
    return {
      givenName: this.props['given-name'] || '',
      surname: this.props['surname'] || '',
      email: this.props['email'] || '',
      phone: this.props['phone'] || '',
      houseNum: this.props['house-name-or-#'] || '',
      street: this.props['street'] || '',
      suburb: this.props['suburb'] || '',
      state: this.props['state'] || '',
      postcode: this.props['postcode'] || '',
      country: this.props['country'] || ''
    };
  }
  public separateByComma(suburb: string, state: string) {
    if (suburb && state) {
      return `${suburb}, ${state}`;
    } else if (suburb) {
      return suburb;
    }
    return state;
  }
  public render() {
    const userDetails = this.getUserDetails();
    return (
      <div className="HCard">
        <HeaderBar
          title={`${userDetails.givenName} ${userDetails.surname}`}
          avatarUrl={this.props.avatarUrl}
        />
        <div className="hcard-inner">
          <CardItem label="Email" value={userDetails.email} />
          <CardItem label="Phone" value={userDetails.phone} />
          <CardItem
            label="Address"
            value={`${userDetails.houseNum} ${userDetails.street}`}
            extraLines={[
              this.separateByComma(userDetails.suburb, userDetails.state)
            ]}
          />
          <CardItem label="Postcode" value={userDetails.postcode} inline />
          <CardItem label="Country" value={userDetails.country} inline />
        </div>
      </div>
    );
  }
}

export default HCard;
