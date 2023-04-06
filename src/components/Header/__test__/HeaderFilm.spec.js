import { describe, it, expect } from "vitest";
import { vi } from "vitest";
import { shallowMount } from "@vue/test-utils";
import HeaderFilm from "../HeaderFilm.vue";

describe("HeaderFilm.spec.js", () => {
  it("kiểm tra thanh tìm kiếm ", async () => {
    const wrapper = shallowMount(HeaderFilm);
    const spy = vi.spyOn(wrapper.vm, "handlesearch");

    const input = wrapper.find("input");

    await input.setValue("avatar");
    await wrapper.find(".navbar-form-btn").trigger("click");

    expect(spy).toHaveBeenCalled();
  });
});
