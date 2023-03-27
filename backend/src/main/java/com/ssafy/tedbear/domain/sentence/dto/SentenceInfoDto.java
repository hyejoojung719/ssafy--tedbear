package com.ssafy.tedbear.domain.sentence.dto;

import org.springframework.web.util.HtmlUtils;

import com.ssafy.tedbear.domain.sentence.entity.Sentence;

import lombok.Getter;

@Getter
public class SentenceInfoDto {
	String content;
	String translation;
	int startTime;

	public SentenceInfoDto(Sentence sentence) {
		this.content = HtmlUtils.htmlUnescape(sentence.getContent());
		this.translation = HtmlUtils.htmlUnescape(sentence.getTranslation()==null?"":sentence.getTranslation());
		this.startTime = sentence.getStartTime();
	}
}