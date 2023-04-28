package com.a504.chatcomposer.member.entity;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.ColumnDefault;

import com.a504.chatcomposer.music.entity.Music;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "member")
public class Member {
	@Id
	@NotNull
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "member_id")
	private Long id;

	@NotNull
	@Column(name = "email", length = 20)
	private String email;

	@NotNull
	@Column(name = "create_at")
	@ColumnDefault("now()")
	private LocalDateTime createAt;

	@NotNull
	@Column(name = "is_withdrawal", nullable = false)
	@ColumnDefault("FALSE")
	private boolean isWithdrawal;

	@OneToMany(mappedBy = "memberId")
	private List<FavoriteGenre> favoriteGenres = new ArrayList<>();

	@OneToOne(mappedBy = "member")
	private Profile profile;

	@OneToMany(mappedBy = "member")
	private List<FavoriteMusic> favoriteMusics = new ArrayList<>();

	@OneToMany(mappedBy = "member")
	private List<Music> musics = new ArrayList<>();

}