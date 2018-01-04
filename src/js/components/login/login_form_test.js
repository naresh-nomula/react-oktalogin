import {assert} from 'chai';
import React from "react";
import {Link} from "react-router-dom";
import "../../enzyme.config";
import {shallow, mount} from "enzyme";
import {LoginForm} from "./login_form";

describe("Component : LoginForm", () => {

    it('it renders without exploding', () => {
        const wrapper = shallow(<LoginForm />);
        assert.equal(wrapper.length,1);
    });

    it('if you click on create new account it will go to /forgot', () => {
        const wrapper = shallow(<LoginForm />);
        const path = wrapper.find('Link').at(0).prop('to');
        assert.equal(path,'/forgot');
        assert.notEqual(path,'/');

    });

    it('if you click on create new account it will go to /register', () => {
        const wrapper = shallow(<LoginForm />);
        const path = wrapper.find('Link').at(1).prop('to');
        assert.equal(path,'/register');
        assert.notEqual(path,'/');

    });
});