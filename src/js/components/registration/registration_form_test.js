import {assert} from 'chai';
import React from "react";
import {Link} from "react-router-dom";
import "../../enzyme.config";
import {shallow} from "enzyme";
import Registration from "../registration/registration_form";

describe("Component : RegistrationForm", () => {

    it('it renders without exploding', () => {
        const wrapper = shallow(<Registration />);
        assert.equal(wrapper.length,1);
    });

    it('it links back to the login page', () => {
        const wrapper = shallow(<Registration />);
        const path = wrapper.find('Link').prop('to');
        assert.equal(path,'/');
        assert.notEqual(path,'/forgot');
    });

});