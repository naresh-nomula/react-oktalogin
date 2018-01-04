import {assert} from 'chai';
import React from "react";
import {Link} from "react-router-dom";
import "../../enzyme.config";
import {shallow} from "enzyme";
import ForgotPassword from "../forgotPassword/forgot_password_form";

describe("Component : RegistrationForm", () => {

    it('it renders without exploding', () => {
        const wrapper = shallow(<ForgotPassword />);
        assert.equal(wrapper.length,1);
    });

    it('it links back to the login page', () => {
        const wrapper = shallow(<ForgotPassword />);
        const path = wrapper.find('Link').prop('to');
        assert.equal(path,'/');
        assert.notEqual(path,'/forgot');
    });

});