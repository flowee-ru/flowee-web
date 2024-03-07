export interface User {
  username: string;
  display_name: string | null;
  bio: string | null;
  live_name: string | null;
  live: {
    ready_time: string;
    viewers: number;
    url: string;
  } | null;
}

export interface JwtClaims {
  username: string;
}
